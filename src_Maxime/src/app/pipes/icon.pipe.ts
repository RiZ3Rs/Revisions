import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icon'
})
export class IconPipe implements PipeTransform {

  transform(like : number): string {
    return '<i class="fa-solid fa-thumbs-up"></i>';
  }

}
