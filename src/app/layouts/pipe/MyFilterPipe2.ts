import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter',
  pure: false,
})
export class MyFilterPipe2 implements PipeTransform {
  transform(items: any[], filter: any) {
    if (!items || !filter) {
      return items;
    }
    //find the section match the category selected
    //if return -1 so it is not found in section
    if(filter>=0)
    return items.filter(item=>item.category.id==filter)
    else
    return items.filter(item=>item.sectionTitle.indexOf(filter)!==-1)

  }
}
