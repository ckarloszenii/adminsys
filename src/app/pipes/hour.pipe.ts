import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hour'
})
export class HourPipe implements PipeTransform {

  transform(value: any): string {
    if (!value) { return ''; }
    const hour = value.substring(0, 2);
    const minutes = value.substring(2, 4);
    let seconds = value.substring(4, 6);
    if (!seconds) {
      seconds = '00';
    }
    return hour + ':' + minutes + ':' + seconds;
  }

}
