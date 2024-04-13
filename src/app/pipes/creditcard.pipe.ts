import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcard',
  standalone: true
})
export class CreditcardPipe implements PipeTransform {

  transform(value: string): string {
    if (!value || value.length !== 16) {
      return '';
    }

  const parts = value.match(/.{1,4}/g);
  if (parts) {
    return parts.join(' - ');
  } else {
    return '';
  }
  }
}


