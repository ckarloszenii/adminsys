import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
      <div class="form-inline">
        <input type="text" class="form-control mr-2 col-7 col-sm-5 col-md-4 col-lg-3" appFocus placeholder="Buscar" (keyup.enter)="searchOne(buscar.value)" #buscar>
        <button class="btn btn-secondary py-2" (click)="searchOne(buscar.value)">
          <i class="fas fa-search mr-2"></i>Buscar
        </button>
      </div>
  `
})

export class SearchComponent {
  @Output() search: any = new EventEmitter;
  searchOne(value: any) { 
    if (value) { 
      this.search.emit(value); 
    } 
  }
}
