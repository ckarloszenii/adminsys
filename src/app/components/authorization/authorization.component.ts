import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.html',
})
export class AuthorizationComponent implements OnInit {
  public userAuth: any = {};
  @Output() user: any = new EventEmitter;
  @Output() close: any = new EventEmitter;

  constructor() {
  }

  ngOnInit() {
    this.userAuth = ({
      user: this.userAuth.user,
      pass: this.userAuth.pass,
      valid: false
    })
  }
  btnAuth() {
    this.user.emit(this.userAuth);
  }
  closeAuth() {
    this.close.emit(true);
  }
}
