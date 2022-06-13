import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollars'
})
export class DollarsPipe implements PipeTransform {

  transform(price : number): string {
    return price+'$';
  }

}
