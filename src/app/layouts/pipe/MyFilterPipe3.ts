import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter3',
  pure: false,
})
export class MyFilterPipe3 implements PipeTransform {
  transform(items: any[], filter: any) {
    if (!items || !filter) {
      return items;
    }
    //find the section match the category selected
    //if return -1 so it is not found in section

    return items.filter(item=>item.career.indexOf(filter)!==-1)

  }
}
