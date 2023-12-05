import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../../services/global'
import { InfociaGlobalService } from '../../services/infocia.service';

@Component({
  selector: 'app-perfil-user',
  templateUrl: './perfil-user.component.html'
})
export class PerfilUserComponent implements OnInit {
  @ViewChild('boxPass') boxPass: ElementRef;
  passActual: string = '';
  actualPassValid: boolean;
  newPass1: string;
  newPass2: string;
  newPassValid: boolean;
  loading: boolean;
  ttUsuario: any = [];
  user: string = '';
  constructor(private _http: HttpClient, private _info: InfociaGlobalService) {
    this.ttUsuario = this._info.getSessionUser();
    this.user = this.ttUsuario.cUserId;
  }

  ngOnInit() {
  }

  validarPassActual() {
    this.actualPassValid = false;
    this.newPassValid = false;
    this.newPass1 = '';
    this.newPass2 = '';
    this.loading = true;
    if (this.passActual.length >= 1) {
      this.serviceValidate();
    } else {
      this.loading = false;
    }
  }

  changePass() {
    this.newPass2 = '';
  }

  validatePass() {
    if (this.newPass1 === this.newPass2) {
      this.newPassValid = true;
    } else {
      this.newPassValid = false;
    }
  }

  serviceValidate() {
    this._http.get<any>(GLOBAL.url + '/ayuda/usuario/Passwd®' + this.user + '®' + this.passActual + '®W®0®0®0').subscribe(
      response => {
        const res = response.response.pcCod;
        if (res[1] === 'S') {
          this.actualPassValid = true;
          setTimeout(() => {
            this.boxPass.nativeElement.focus();
          });
        } else {
          this.actualPassValid = false;
        }
        this.loading = false;
      },
      error => {
        this.loading = false;
      }
    );
  }

  
  savePassword() {
    if (!this.actualPassValid || !this.newPassValid) {
      return;
    }
    this.loading = true;
    const user = JSON.parse(JSON.stringify(this.ttUsuario));
    user.cUserPwd = this.newPass2;
    user.cUserId = this.user;
    const json = '{"dsUsuarios": {"ttUsuarios": [' + JSON.stringify(user) + ']}}'
    this._http.put<any>(GLOBAL.url + '/admin/ayuda/userConf/Passwd', json, GLOBAL.httpOptions).subscribe(
      res => {
        this.passActual = '';
        this.validarPassActual();
      },
      error => {
        this.loading = false;
      }
    );
  }
}
