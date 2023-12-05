import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from './global';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable()
export class InfociaGlobalService {
    public notify = new Subject<any>();
    public notify2 = new Subject<any>();
    public notifyObservable$ = this.notify.asObservable();
    private bulma = new BehaviorSubject<string>('');
    bulma$ = this.bulma.asObservable();
    public url: string;

    constructor(private httpClient: HttpClient) {
        this.url = GLOBAL.url;
    }

    public notifyOther(data: any) {
        this.notify.next(data);
    }

    enviar(mensaje) {
        this.bulma.next(mensaje);
    }
    getTipoCambio() {
        return this.httpClient.get<any>(this.url + '/ayuda/tcambio')
            .pipe(map(res => res.response.siAyuda.dsAyuda.ttTcambios));
    }

    getTipoCambioDia(moneda) {
        return this.httpClient.get<any>(this.url + '/ayuda/tcambio' + GLOBAL.char174 + moneda)
            .pipe(map(res => res.response.siAyuda.dsAyuda.ttTcambios));
    }

    getConvertirMontoTexto(monto, moneda, idioma) {
        return this.httpClient.get<any>(this.url + '/ayuda/numlet/' + monto + GLOBAL.char174 + moneda + GLOBAL.char174 + idioma)
            .pipe(map(res => res.response));
    }

    getSistemas() {
        return this.httpClient.get<any>(this.url + '/admin/ayuda/sistema')
            .pipe(map(res => res.response.siSistMstr.dsSistMstr.ttSistMstr));
    }

    getUserCia() {
        return this.httpClient.get<any>(this.url + '/manttos/infocia')
            .pipe(map(res => res.response.siInfocia.dsInfocia));
    }

    getSessionUser() { // Obtener del Local Storage la ultima posicion del arreglo
        return JSON.parse(localStorage.getItem('globalUser'));
    }


    getSessionInfocia() { // Obtener del Local Storage la ultima posicion del arreglo
        return JSON.parse(localStorage.getItem('globalInfocia'));
    }

    public getParametros(parametro) {
        return this.httpClient.get<any>(this.url + '/ayuda/parametros' + GLOBAL.char174 + parametro)
            .pipe(map(res => res.response.siAyuda.dsAyuda.ttParametros));
    }

    manttoConsultaHuespedes(user: any) {
        const chuesp = user.cVal5;
        const val5 = chuesp.split('');
        const consultaHuesped = [];
        let grabarMsjes;
        if (val5[0] === 'S') {
            grabarMsjes = true;
        } else {
            grabarMsjes = false;
        } // Mensajes
        let grabarNotas;
        if (val5[1] === 'S') {
            grabarNotas = true;
        } else {
            grabarNotas = false;
        } // Notas
        let grabarReqEsp;
        if (val5[2] === 'S') {
            grabarReqEsp = true;
        } else {
            grabarReqEsp = false;
        } // Req. Esp.
        let grabarCargos;
        if (val5[3] === 'S') {
            grabarCargos = true;
        } else {
            grabarCargos = false;
        } // Cargos
        let grabarCuentas;
        if (val5[4] === 'S') {
            grabarCuentas = true;
        } else {
            grabarCuentas = false;
        } // Cuentas
        let grabarAdic;
        if (val5[5] === 'S') {
            grabarAdic = true;
        } else {
            grabarAdic = false;
        } // Adicionales
        let grabarBandas;
        if (val5[6] === 'S') {
            grabarBandas = true;
        } else {
            grabarBandas = false;
        } // Bandas

        consultaHuesped.push(grabarMsjes, grabarNotas, grabarReqEsp, grabarCargos, grabarCuentas, grabarAdic, grabarBandas);
        return consultaHuesped;
    }

    manttoCaja(user: any) {
        const val = user.cVal1.split('');
        const caja = [];
        let cancelar;
        if (val[0] === 'S') {
            cancelar = true;
        } else {
            cancelar = false;
        } // Cancelar
        let transferir;
        if (val[1] === 'S') {
            transferir = true;
        } else {
            transferir = false;
        } // Transferir
        let ajustar;
        if (val[2] === 'S') {
            ajustar = true;
        } else {
            ajustar = false;
        } // Req. Esp.
        let cargosRojo;
        if (val[3] === 'S') {
            cargosRojo = true;
        } else {
            cargosRojo = false;
        } // Cargos
        let separar;
        if (val[4] === 'S') {
            separar = true;
        } else {
            separar = false;
        } // Cuentas
        let fpNegro;
        if (val[5] === 'S') {
            fpNegro = true;
        } else {
            fpNegro = false;
        } // Adicionales
        let separarCreditos;
        if (val[6] === 'S') {
            separarCreditos = true;
        } else {
            separarCreditos = false;
        } // Bandas

        caja.push(cancelar, transferir, ajustar, cargosRojo, separar, fpNegro, separarCreditos);
        return caja;
    }

    manttoConsultaReserv(user: any) {
        const creserv = user.cVal8;
        const cVal8 = creserv.split('');
        const consultaReserva = [];

        let grabarMsjes;
        if (cVal8[0] === 'S') {
            grabarMsjes = true;
        } else {
            grabarMsjes = false;
        } // Mensajes
        let grabarNotas;
        if (cVal8[1] === 'S') {
            grabarNotas = true;
        } else {
            grabarNotas = false;
        } // Notas
        let grabarReqEsp;
        if (cVal8[2] === 'S') {
            grabarReqEsp = true;
        } else {
            grabarReqEsp = false;
        } // Req. Esp.
        let grabarCuentas;
        if (cVal8[4] === 'S') {
            grabarCuentas = true;
        } else {
            grabarCuentas = false;
        } // Cuentas
        let grabarDeposito;
        if (cVal8[5] === 'S') {
            grabarDeposito = true;
        } else {
            grabarDeposito = false;
        } // Depositos
        let grabarSolicitud;
        if (cVal8[6] === 'S') {
            grabarSolicitud = true;
        } else {
            grabarSolicitud = false;
        } // Solicitud

        consultaReserva.push(grabarMsjes, grabarNotas, grabarReqEsp, grabarCuentas, grabarDeposito, grabarSolicitud);
        return consultaReserva;
    }

    formatDate(date) { // Recibe fecha en formato JavaScript : Date y devuelve formato sql
        const d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();

        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }

        return [month, day, year].join('-');
    }

    toDate(dateStr) { // Recibe formato SQL y Devuelve fecha en formato JavaScript :Date
        const [year, day, month] = dateStr.split('-');
        return new Date(year, month - 1, day);
    }

    obtenerTipo(tipo) {
        let descripcion = '';
        switch (tipo) {
            case 'N': descripcion = 'NUEVA'; break;
            case 'M': descripcion = 'MODIFICACION'; break;
            case 'B': descripcion = 'BORRAR'; break;
            case 'C': descripcion = 'CXLD'; break;
            case 'L': descripcion = 'BLOQUEO'; break;
            case 'S': descripcion = 'NO SHOW'; break;
            case 'R': descripcion = 'RE-ACTIVADA'; break;
            case 'CC': descripcion = 'VISUALIZA TARJETA'; break;
        }
        return descripcion;
    }

    serverDate(date) {
        const d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();

        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }

        return [year, month, day].join('-');
    }

    totalDaysTwoDates(day1, day2) {
        const fday1 = moment(day1);
        const fday2 = moment(day2);
        return fday2.diff(fday1, 'days');
    }

    removeLocalStorage() {
        localStorage.removeItem('globalUser');
        localStorage.removeItem('globalInfocia');
        localStorage.removeItem('formatKendo');
        localStorage.removeItem('formatMoment');
        localStorage.removeItem('cheque-selected');
        localStorage.removeItem('pointSelected');
    }

    logoutProgress() {
        const params = { logout: '' };
        return this.httpClient.post(GLOBAL.iplogout, params)
            .pipe(map(res => this.removeLocalStorage()));
    }

    deleteTempRsrv() {
        return this.httpClient.get<any>(this.url + '/rsrv/reserv/tempctos/1')
            .pipe(map(res => res.response.siMensaje.dsMensajes));
    }
    
    loginProgress(user): any {
        return this.httpClient.post(GLOBAL.ipLoginProgress, user, GLOBAL.httpOptions)
            .pipe(map(res => res));
    }

    getPsCfd() {
        return this.httpClient.get<any>(this.url + '/ayuda/cfd/ps')
            .pipe(map(res => res.response.siCfdayuda.dsCfdayuda.ttCfdPS));
    }

    getConsecutivos(origin) {
        return this.httpClient.get<any>(this.url + '/manttos/consecutivos/' + origin)
            .pipe(map(res => res.response.siConsecutivo.dsConsecutivos.ttConsec));
    }

    groupBy(data) {
        const result = data.reduce(function (r, a) {
            r[a.formato] = r[a.formato] || [];
            r[a.formato].push(a);
            return r;
        }, Object.create(null));
        return result;
    }

    motivosCxld() {
        const data = [
          { id: '01', desc: '01 - Comprobante emitido con errores con relacion' },
          { id: '02', desc: '02 - Comprobante emitido con errores sin relacion' },
          { id: '03', desc: '03 - No se llevo a cabo la operacion' },
          { id: '04', desc: '04 - Operacion nominativa relacionada en una factura global' }
        ];
        return data;
      }
}
