import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { GLOBAL } from './global';
const toast = GLOBAL.toast;

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // if (!localStorage.getItem('globalInfocia') || !localStorage.getItem('globalUser')) {
        //     return true;
        // }
        if (localStorage.getItem('logout') === 'si') {
            localStorage.clear();
            return true;
        } else {
            const ttInfocia = JSON.parse(localStorage.getItem('globalInfocia'));
            const tcambio = JSON.parse(localStorage.getItem('globalTcambio'));

            // Si tiene una sesión no lo permito dirigirse al login
            if (route.routeConfig.path && route.routeConfig.path === 'login' && ttInfocia) {
                this.router.navigate(['sistemas']);
                return true;
                // return false;
            } else {
                if (ttInfocia && ttInfocia.cNotifica) {
                    toast.fire({
                        title: 'Información importante!!',
                        text: ttInfocia.cNotifica,
                        icon: 'info',
                        timer: 10000
                    });
                }
                if (tcambio && tcambio.cErrDesc) {
                    toast.fire({
                        // title: 'Información importante!!',
                        title: tcambio.cErrDesc,
                        icon: 'info',
                        timer: 10000
                    });
                }
                return true;
                // // sino tiene una sesión hay que dirigirlo al login
                // localStorage.clear();
                // if (route.routeConfig.path && route.routeConfig.path !== 'login') {
                //     this.router.navigate(['/login']);
                //     return true;
                // }
            }
        }
    }
}
