import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'icon'
})
export class IconsPipe implements PipeTransform {

    transform(value: string): string {
        let icon = '';
        switch (value) {
            case 'Buscar': icon = 'fa-search'; break;
            case 'Confirmación': icon = 'fa-mail-bulk'; break;
            case 'Bloquear': icon = 'fa-lock'; break;
            case 'Mensajes': icon = 'fa-envelope'; break;
            case 'Notas': icon = 'fa-sticky-note'; break;
            case 'Requerimientos': icon = 'fa-tools'; break;
            case 'Cargos': icon = 'fa-cash-register'; break;
            case 'Cuentas': icon = 'fa-credit-card'; break;
            case 'Check-Out': icon = 'fa-sign-out-alt'; break;
            case 'Adicional': icon = 'fa-user-plus'; break;
            case 'Viajando Con': icon = 'fa-plane'; break;
            case 'Comparte': icon = 'fa-user-friends'; break;
            case 'Depositos': icon = 'fa-money-check-alt'; break;
            case 'Solicitud': icon = 'fa-file-invoice-dollar'; break;
            case 'Rooming List': icon = 'fa-list-alt'; break;
            case 'Tarifas': icon = 'fa-funnel-dollar'; break;
            case 'Lista Tarifas': icon = 'fa-calculator'; break;
            case 'Tarifas Huesped': icon = 'fa-calculator'; break; 
            case 'Disponibilidad': icon = 'fa-search-dollar'; break;
            case 'Habitaciones Disponibles': icon = 'fa-bed'; break;
            case 'Autorización': icon = 'fa-user-lock'; break;
            case 'Buscar Huespedes': icon = 'fa-search'; break;
            case 'Buscar Reservaciones': icon = 'fa-search'; break;
            case 'Secuencias': icon = 'fa-sort-numeric-up'; break;
            case 'Clientes': icon = 'fa-search'; break;
            case 'Historico Clientes': icon = 'fa-history'; break;
            case 'R.F.C.': icon = 'fa-user-circle'; break;
            case 'Empresas': icon = 'fa-building'; break;
            case 'Agencias': icon = 'fa-plane'; break;
            case 'Sub-Agencias': icon = 'fa-plane'; break;
            case 'Grupos': icon = 'fa-users'; break;
            case 'Maestras': icon = 'fa-users'; break;
            case 'De Grupo': icon = 'fa-users'; break;
            case 'Estadistica': icon = 'fa-chart-bar'; break;
            case 'Estados': icon = 'fa-flag'; break; 
            case 'Check-In': icon = 'fa-check-circle'; break; 
            case 'Fallado': icon = 'fa-user-times'; break; 
            case 'C x C': icon = 'fa-file-invoice-dollar'; break; 
            case 'Movimientos': icon = 'fa-money-bill-alt'; break; 
            case 'Brazaletes': icon = 'fa-band-aid'; break; 
            case 'Tarjeta Registro': icon = 'fa-address-book'; break; 
            case 'Revisar Cambios': icon = 'fa-eye'; break; 
        }
        return icon;
    }
}
