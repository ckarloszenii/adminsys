import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ValidationsService } from '../../pms/recepcion/check-in/services/service-checkin.index';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'app-autorizar-cambios',
  templateUrl: './autorizar-cambios.component.html',
})
export class AutorizarCambiosComponent implements OnInit {
  public userAuth: any = {};
  @Output() result: any = new EventEmitter;
  @Output() close: any = new EventEmitter;
  toast = GLOBAL.toast;
  messageUserAuth: string;
  constructor(private _valid: ValidationsService) {
  }

  ngOnInit() {
    this.userAuth = ({
      user: this.userAuth.user,
      pass: this.userAuth.pass,
      permisos: [],
      valid: false
    });
  }

  btnAutorizar() {
    this._valid.getAuthorization(this.userAuth.user, this.userAuth.pass, 7, 0, 0).subscribe(data => {
      if (data.pcCod) {
        this.userAuth.permisos = data.pcCod.split('');
        const valid = this._valid.validateUserAuth(this.userAuth.permisos);
        if (valid) {
          this.messageUserAuth = valid;
        } else {
          this.userAuth.valid = true;
          this.result.emit(this.userAuth);
        }
      }
    });
  }

  closeAuth() {
    this.close.emit(true);
  }
}
