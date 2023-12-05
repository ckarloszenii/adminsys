import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'app-signature-pad',
  templateUrl: './signature-pad.component.html',
  styleUrls: ['./signature-pad.component.css']
})
export class SignaturePadComponent implements OnInit {
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  @Output() result = new EventEmitter;
  signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'canvasWidth': 300,
    'penColor': '#343a40',
    'minWidth': 0.5,
    'canvasHeight': 220,
  };
  colorPicker: string = '#343a40';

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    // this.signaturePad.set('minWidth', 0.5); 
    // set szimek/signature_pad options at runtime
    // this.signaturePad.set('penColor', this.colorSignature);
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
  }
  aceptarSignature() {
    this.result.emit(this.signaturePad.toDataURL());
  }
  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
  }
  formatLabel({ value }) {
    this.signaturePad.set('minWidth', value);

  }
}
