import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
const esp = GLOBAL.char174;
const url = GLOBAL.url;

@Injectable()
export class SharedService {
  public user: any;
  public infocia: any;

  constructor(private http: HttpClient) {
  }

  getAyuda(param) {
    return this.http.get<any>(url + '/ayuda/' + param).pipe(map(res => res.response.siAyuda.dsAyuda));
  }

  getCodigos(tipo, num, activos, codigo?) {
    // tipo = d(debito) /c (credito) 
    // num = Orden segun mantto codigos
    // activos = Y / N 
    // codigo ? un codigo en especifico
    codigo ? codigo = esp + codigo : codigo = '';
    return this.http.get<any>(url + '/ayuda/codigos' + esp + tipo + esp + num + esp + activos + codigo)
      .pipe(map(res => res.response.siAyuda.dsAyuda.ttCodigos));
  }

  getMonedas() {
    return this.http.get<any>(url + '/ayuda/monedas').pipe(map(res => res.response.siAyuda.dsAyuda.ttMonedas));
  }

  getParamsBotones(menu) {
    return this.http.get<any>(url + '/parametros/sistema').pipe(map(res => {
      const botones = res.response.siSistema.dsSistema.ttBotsistema;
      if (botones) {
        const asyncLoad = [];
        botones.forEach(item => {
          if (item.cMenu === menu) {
            if (item.lNotas) {
              asyncLoad.push('Notas');
            }
            if (item.lReqEsp) {
              asyncLoad.push('Requerimientos');
            }
            if (item.lCuentas) {
              asyncLoad.push('Cuentas');
            }
            if (item.lCargos) {
              asyncLoad.push('Cargos');
            }
            if (item.lBandas) {
              asyncLoad.push('Brazaletes');
            }
            if (item.lFallado) {
              asyncLoad.push('Fallado');
            }
            if (item.lCxC) {
              asyncLoad.push('C x C');
            }
            if (item.lInfAdicional) {
              asyncLoad.push('Adicional');
            }
            if (item.lLlaves) {
              asyncLoad.push('C x C');
            }
            if (item.lEntradaMovtos) {
              asyncLoad.push('Movimientos');
            }
          }
        });
        return asyncLoad;
      }
    }));
  }

  getTipoCargos() {
    const dataTiposReq = [
      { tipoCargo: 'D', tcdesc: 'DIARIO' },
      { tipoCargo: 'E', tcdesc: 'ENTRADA' },
      { tipoCargo: 'S', tcdesc: 'SALIDA' },
      { tipoCargo: 'N', tcdesc: 'NINGUNO' }
    ];
    return dataTiposReq;
  }

  getCuentas() {
    const dataCuentas = [
      { tipoCuenta: 'A', tcuentadesc: 'A', field: 'htfola' },
      { tipoCuenta: 'B', tcuentadesc: 'B', field: 'htfolb' },
      { tipoCuenta: 'C', tcuentadesc: 'C', field: 'htfolc' },
      { tipoCuenta: 'D', tcuentadesc: 'D', field: 'htfold' },
      { tipoCuenta: 'E', tcuentadesc: 'E', field: 'htfole' },
      { tipoCuenta: 'F', tcuentadesc: 'F', field: 'htfolf' },
    ];
    return dataCuentas;
  }

}
