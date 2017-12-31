import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activar'
})
export class ActivarPipe implements PipeTransform {

  transform(value: string, activar: boolean): string {
  	if ( activar ){
  		return value.toLowerCase();
  	}else{
  		return value;
  	}
  }

}
