import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FilterStatusPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filterStatus',
})
export class FilterStatusPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: any[], ...args) {

      //Count how many words were passed in
      // let wordCount = value.split(" ").length;
      if (!items || !args) {
           return items;
       }

       console.log(items);
       console.log(args);
       console.log(items.length);

       return items.filter(item => item.ExtTransactionStatus.extrnSts == args[0]);
      // let newValue = [];
      //
      //
      //
      // for(let i = 0; i < items.length; i++){
      //
      //     console.log(items[i],args);
      //     newValue.push(items[i]);
      // }
      //
      // return newValue;
  }
}
