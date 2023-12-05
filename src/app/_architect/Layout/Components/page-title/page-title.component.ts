import { Component, Input } from '@angular/core';
import { Observable, merge, of } from 'rxjs';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
})
export class PageTitleComponent {

  @Input() heading;
  @Input() subheading;
  @Input() icon;
  isConnected: Observable<boolean>;
  flagConnect: boolean;
  constructor() {
    this.isConnected = merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(map(() => true)),
      fromEvent(window, 'offline').pipe(map(() => false)));
      this.isConnected.subscribe(isOn => this.flagConnect = isOn);
  }
}
