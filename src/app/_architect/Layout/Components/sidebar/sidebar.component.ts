import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeOptions } from '../../../theme-options';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { InfociaGlobalService } from '../../../../services/infocia.service';
// import { MenuPmsService } from '../../../../services/menu.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
    @select('config') public config$: Observable<any>;
    public extraParameter: any;
    public submenu: any = [];
    public ttUsuario: any = [];
    public menuPos: any = [];
    public sistema: string;
    public activeId = '';
    private newInnerWidth: number;
    private innerWidth: number;

    constructor(public globals: ThemeOptions,
        private activatedRoute: ActivatedRoute,
        private _info: InfociaGlobalService,
        // private menu_serv: MenuPmsService,
        private router: Router) {

        this.globals.toggleSidebar = true;
        this.globals.sidebarHover = false;
    }

    toggleSidebar() {
        this.globals.toggleSidebar = !this.globals.toggleSidebar;
    }

    sidebarHover() {
        this.globals.sidebarHover = !this.globals.sidebarHover;
    }

    ngOnInit() {
        setTimeout(() => {
            this.innerWidth = window.innerWidth;
            if (this.innerWidth < 1200) {
                this.globals.toggleSidebar = true;
            }
        });

        this.extraParameter = this.activatedRoute.snapshot.firstChild.data.extraParameter;

        this.ttUsuario = this._info.getSessionUser();

        // this.menu_serv.cuerrentSistema.subscribe(data => {
        //     this.menu_serv.getMenu(data).subscribe(res => {
        //         this._menu.setMenuObs(res);
        //         this._menu.cuerrentObservableMenu.subscribe(value => {
        //             if (!value) {
        //                 return;
        //             }
        //             value.sort(function (a, b) {
        //                 if (a.iSec > b.iSec) {
        //                     return 1;
        //                 }
        //                 if (a.iSec < b.iSec) {
        //                     return -1;
        //                 }
        //                 return 0;
        //             });

        //             for (const i of value) {
        //                 if (i.SubMenu) {
        //                     i.SubMenu.sort(function (a, b) {
        //                         if (a.iSec > b.iSec) {
        //                             return 1;
        //                         }
        //                         if (a.iSec < b.iSec) {
        //                             return -1;
        //                         }
        //                         return 0;
        //                     });
        //                 }
        //             }

        //             this.menuPos = value;
        //         });
        //     });
        // });

        const routeAux = this.router.url.split('/');
        this.sistema = '/' + routeAux[1] + '/home';
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.newInnerWidth = event.target.innerWidth;

        if (this.newInnerWidth < 1200) {
            this.globals.toggleSidebar = true;
        } else {
            this.globals.toggleSidebar = true;
        }

    }
}
