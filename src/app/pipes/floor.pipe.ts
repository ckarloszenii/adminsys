
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})

export class RoundPipe implements PipeTransform {
  transform(value: number): number {
    if (!value) { value = 0; }
    const num1 = Math.round(value * 100) / 100;
    return num1;
  }
}
