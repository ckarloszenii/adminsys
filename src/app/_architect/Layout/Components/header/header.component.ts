import { Component, HostBinding, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { select } from '@angular-redux/store';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs';
import { ThemeOptions } from '../../../theme-options';
import { InfociaGlobalService } from '../../../../services/infocia.service';
import { GLOBAL } from '../../../../services/global';
import * as moment from 'moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [InfociaGlobalService]
})
export class HeaderComponent implements OnInit {
  ttInfocia: any;
  ttUsuarios: any;
  ttUserConf: any;
  encabezado: any = [];
  userSys: any;
  isActive: boolean;
  fechaH = '';
  mensajes = [];
  @select('config') public config$: Observable<any>;
  loading: boolean;
  flagMsjs: boolean;
  isConnected: Observable<boolean>;
  flagConnect: boolean;
  profileImg = GLOBAL.profileImg;
  elem;
  flagScreen = true;

  constructor(public globals: ThemeOptions,
    private _router: Router,
    private _info: InfociaGlobalService,
    @Inject(DOCUMENT) private document: any
  ) {
    this._info.getUserCia().subscribe(data => this.init(data));
    // document.cookie = "nombre=Miguel";
    // document.cookie = "saludos=peddros";
  }

  ngOnInit() {
    this.config$.subscribe(data => {
      if (data.changeDate) {
        this.init(data.changeDate);
      }
    });
    this.elem = document.documentElement;
  }

  @HostBinding('class.isActive')
  get isActiveAsGetter() {
    return this.isActive;
  }

  init(data) {
    this.ttInfocia = data.ttInfocia[0];
    this.ttUsuarios = data.ttUsuarios[0];
    this.ttUserConf = data.ttUserConf[0];
    this.mensajes = this.ttInfocia.cmensaje.split('®');
    this.encabezado = this.ttInfocia.encab.split('®');
    this.fechaH = moment(this.ttInfocia.fday).locale('es').format(localStorage.getItem('formatMoment') + ' dddd');
    this.userSys = this.ttUsuarios.cVal32.split('®');
    if (this.ttInfocia.cmensaje || this.ttInfocia.cNotifica) {
      this.flagMsjs = true;
    } else {
      this.flagMsjs = false;
    }
  }


  toggleSidebarMobile() {
    this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
  }

  toggleHeaderMobile() {
    this.globals.toggleHeaderMobile = !this.globals.toggleHeaderMobile;
  }

  endSession() {
    localStorage.setItem('logout', 'si');
    this.loading = true;
    setTimeout(() => {
      this._info.deleteTempRsrv().subscribe(data => {
        this.loading = false;
        this._info.logoutProgress().subscribe(response => {
          this._router.navigate(['/login']);
        }, error => {
          this._router.navigate(['/login']);
        });
      }, error => {
        this._router.navigate(['/login']);
      }
      );
    }, 1000);
  }

  openFullscreen() {
    if (!this.document.fullscreenElement) {
      if (this.elem.requestFullscreen) {
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.mozRequestFullScreen) {
        /* Firefox */
        this.elem.mozRequestFullScreen();
      } else if (this.elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.msRequestFullscreen) {
        /* IE/Edge */
        this.elem.msRequestFullscreen();
      }
    }
  }
  /* Close fullscreen */
  closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }

  fullScreen() {
    if (this.flagScreen) {
      this.flagScreen = false;
      this.openFullscreen();
    } else {
      this.flagScreen = true;
      this.closeFullscreen();
    }
  }

}
