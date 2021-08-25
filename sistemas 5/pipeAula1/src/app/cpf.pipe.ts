import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf' //nome que vai ser invocado
})
export class CpfPipe implements PipeTransform {

  transform(value: string, dotSeparator: boolean): string {

    let result =  value.substring(0, 3) + '.' +
      value.substring(3, 6) + '.' +
      value.substring(6, 9);
      
      if(dotSeparator){
        result += '.'
      }else{
        result += '-'
      }      
      return result + value.substring(9);
  }
}

//parametro value: o tipo que vai se recebido pelo pipe
//parametro args: caracteristicas do pipe (| date : 'full') no caso é full
//transform(value: string): unknown   :unknow é o retorno, o que o pipe irá retornar