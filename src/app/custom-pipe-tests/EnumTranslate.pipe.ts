import { Pipe, PipeTransform } from '@angular/core';
import { enums } from './enums'
// name of pipe in decorator @Pipe
@Pipe({ name: 'enumTranslate' })
export class EnumTranslatePipe implements PipeTransform {

    transform(viewValue: string, enumName: string) {
        console.log(viewValue, enumName, enums[enumName]);
        let x =  enums[enumName];
        let y =  enums[enumName][viewValue]
        debugger;
        return y;
    }

}