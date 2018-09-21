import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpecial'
})
export class RemoveSpecialPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let regExpr = /[^a-zA-Z0-9 ]/g;
    return  value.replace(regExpr, "");
  }

}
