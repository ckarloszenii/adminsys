import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GLOBAL } from './global';
interface ResInterface {
    'response': any
}

@Injectable()
export class VerifySessionService implements CanActivate {

    constructor(private http: HttpClient) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.http.get<ResInterface>(GLOBAL.url + '/manttos/infocia').pipe(map(res => {
            const result = res.response.siInfocia.dsInfocia;
            if (!result.ttInfocia || !result.ttUsuarios) {
                GLOBAL.swal.fire('Error en infocia', 'Configuración de usuario o compañia incompleta!!', 'error');
            } else {
                localStorage.clear();
                localStorage.setItem('globalInfocia', JSON.stringify(result.ttInfocia[0]));
                localStorage.setItem('globalUser', JSON.stringify(result.ttUsuarios[0]));
                localStorage.setItem('gobalUserConf', JSON.stringify(result.ttUserConf[0]));
                if (result.ttTcambios && result.ttTcambios.length) {
                    localStorage.setItem('globalTcambio', JSON.stringify(result.ttTcambios[0]));
                }
                const format = result.ttInfocia[0].formatfecha.split('');
                let formatKendo = '';
                let formatMoment = '';
                for (let i = 0; i < format.length; i++) {
                    if (format[i] === 'y' || format[i] === 'Y') {
                        formatKendo += 'yyyy';
                        formatMoment += 'YYYY';
                    } else if (format[i] === 'm' || format[i] === 'M') {
                        formatKendo += 'MM';
                        formatMoment += 'MM';
                    } else if (format[i] === 'd' || format[i] === 'D') {
                        formatKendo += 'dd';
                        formatMoment += 'DD';
                    }

                    if (i !== format.length - 1) {
                        formatKendo += '-';
                        formatMoment += '-';
                    }

                    localStorage.setItem('formatKendo', formatKendo);
                    localStorage.setItem('formatMoment', formatMoment);
                }

                return true;
            }
        }));
    }
}
