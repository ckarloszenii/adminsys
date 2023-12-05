import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GLOBAL } from './services/global';
import { InfociaGlobalService } from './services/infocia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [InfociaGlobalService],
})
export class AppComponent implements OnInit {
  // @HostListener('window:beforeunload', ['$event'])
  // handleClose($event) {
  //     $event.returnValue = 'Tus cambios';
  // }
  elem;
  public subscription: Subscription;
  flagLogout: boolean;
  hasNetworkConnection: boolean;
  hasInternetAccess: boolean;
  status: string;

  constructor(private _info: InfociaGlobalService,
    private _router: Router,
    private _http: HttpClient,
    @Inject(DOCUMENT) private document: any) {
  }
  ngOnInit() {
    this.elem = document.documentElement;

  }
  doBeforeUnload() {
    if (localStorage.getItem('logout') !== 'si') {
      return false;
    }
    localStorage.clear();
  }

  doUnload() {
    if (localStorage.getItem('logout') !== 'si') {
      localStorage.clear();
      this._info.deleteTempRsrv().subscribe();
      return this._http.post(GLOBAL.iplogout, { logout: '' }).subscribe();
    }
  }

}
