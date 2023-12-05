import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class MenuPmsService {
  private sistema = new BehaviorSubject<any>([]);
  cuerrentSistema = this.sistema.asObservable();

  public url: string;

  constructor(private http: HttpClient, private router: Router) {
    this.url = GLOBAL.url;
    this.sistema.next(this.router.url.split('/')[1].toUpperCase());
  }

  getMenu(sistema) {
    return this.http.get<any>(this.url + '/admin/ayuda/' + environment.urlMenu + '/' + sistema + GLOBAL.char174 + GLOBAL.char174)
      .pipe(map(res => res.response.siMenuGral.dsMenuGral.ttMenuGral));
  }

  getSubMenu(menu) {
    return this.http.get<any>(this.url + '/admin/ayuda/' + environment.urlMenu + '/PMS' + GLOBAL.char174 + menu + GLOBAL.char174)
      .pipe(map(res => res.response.siMenuGral.dsMenuGral.ttMenuGral));
  }

  getOpciones(menu, submenu) {
    return this.http.get<any>(this.url + '/admin/ayuda/' + environment.urlMenu + '/PMS' + GLOBAL.char174 + menu + GLOBAL.char174 + submenu)
      .pipe(map(res => res.response.siMenuGral.dsMenuGral.ttMenuGral));
  }

  getEstadoCuartos() {
    return this.http.get<any>(this.url + '/manttos/ctoedos')
      .pipe(map(res => res.response.siCtoedos.dsCtoedos.ttCtoedos));
  }
}
