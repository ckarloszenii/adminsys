import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import { InfociaGlobalService } from '../../services/infocia.service';
import { GLOBAL } from '../../services/global';
const toast = GLOBAL.toast;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    ngForm: FormGroup;
    private httpClient: HttpClient;

    constructor(private handler: HttpBackend,
        private _info: InfociaGlobalService,
        private fb: FormBuilder,
        private _router: Router) {
        this.httpClient = new HttpClient(handler);
        this.createFormGroup();
        // const ttUsuario = this._info.getSessionUser();
        // if (ttUsuario && ttUsuario.cVal32) {
        //     const sys = ttUsuario.cVal32.split('®');
        //     if (sys && sys.length) {
        //         this._router.navigate(['/sistemas']);
        //     }
        // }
    }

    ngOnInit() {
    }

    createFormGroup() {
        this.ngForm = this.fb.group({
            j_username: [null, [Validators.required]],
            j_password: [null, Validators.required]
        });
    }

    async sign_in() {
        const body = 'j_username=' + this.ngForm.get('j_username').value +
            '&j_password=' + this.ngForm.get('j_password').value;

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        this.httpClient.post<any>(GLOBAL.ipLoginProgress, body, httpOptions)
            .subscribe(
                (res) => {
                    if (res.status_code === 200) {
                        this._router.navigate(['/sistemas']);
                    }
                },
                (err) => {
                    if (err.status === 401) {
                        toast.fire('Usuario y/o contraseña incorrectos!!!', '', 'info');
                    }
                    if (err.status === 403) {
                        toast.fire('Acceso Denegado!!!', '', 'info');
                    }
                    if (err.status === 405) {
                        toast.fire('Servidor no esta disponible!!!', '', 'info');
                    }
                    if (err.status === 404) {
                        toast.fire('Servidor no esta conectado!!!', '', 'info');
                    }
                    if (err.status === 500) {
                        toast.fire('Servidor no esta conectado!!!', '', 'info');
                    }
                }
            );
    }

}
