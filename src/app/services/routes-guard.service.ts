import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { GLOBAL } from './global';

@Injectable({
    providedIn: 'root'
})
export class RoutesGuard implements CanActivate {

    constructor(private router: Router, private _http: HttpClient) {

    }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

        let split: any;
        if (state.url) {
            split = state.url.split('/');
            if (split.length === 3 && split[2] !== 'home') {
                const result = await this.checkRoute(split);
                return result;
            } else {
                return true;
            }
        }

    }
    checkRoute(route): Promise<boolean> {
        return new Promise((resolve) => {
            this._http.get<any>(GLOBAL.url + '/ayuda/Acceso/' + route[1] + GLOBAL.char174 + route[2]).subscribe(data => {
                const result = data.response.pcCod;
                if (result === '*') {
                    this.router.navigate(['/home']);
                    resolve(false);
                    return false;
                } else {
                    resolve(true);
                }
            });
        });
    }
}
