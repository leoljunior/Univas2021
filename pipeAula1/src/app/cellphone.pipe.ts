import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cellphone'
})
export class CellphonePipe implements PipeTransform {

  transform(value: string, ddd: string): any {
    let result = ''
    if (ddd) {
      result = `(${ddd}) `
    }
    return result + value.substring(0, 5) + '-' +
      value.substring(5);
  }
}
