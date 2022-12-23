import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter4',
  pure: false,
})
export class MyFilterPipe4 implements PipeTransform {
  transform(items: any[], filter: any) {
    if (!items || !filter) {
      return items;
    }
    //find the section match the category selected
    //if return -1 so it is not found in section

    return items.filter(item=>item.userName.indexOf(filter)!==-1)

  }
}
