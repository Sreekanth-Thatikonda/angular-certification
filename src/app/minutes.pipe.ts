import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutes',
  standalone: true
})
export class MinutesPipe implements PipeTransform {

  transform(value: string): string {
    let hours = Math.floor(Number(value) / 60);
    let minutes = Math.floor(Number(value) % 60);
    return hours + ' h ' + minutes + ' min';
  }

}
