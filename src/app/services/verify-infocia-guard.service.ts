import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';
import { InfociaGlobalService } from './infocia.service';

@Injectable({
    providedIn: 'root'
})
export class VerifyInfociaGuardService implements CanActivateChild {

    constructor(private _info: InfociaGlobalService) { }

    canActivateChild(): Promise<boolean> | boolean {
        if (!localStorage.getItem('globalInfocia') || !localStorage.getItem('globalUser')) {
            return !this._info.getUserCia().subscribe(data => {
                localStorage.clear();
                localStorage.setItem('globalInfocia', JSON.stringify(data.ttInfocia[0]));
                localStorage.setItem('globalUser', JSON.stringify(data.ttUsuarios[0]));
    
                const format = data.ttInfocia[0].formatfecha.split('');
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
            }).closed;
        } else {
            return true;
        }
    }
}
