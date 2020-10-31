import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(value: string): string {
    const letters = value.split('');

    if (letters.length === 1) {
      if (letters[0].length === 1) {
        return letters[0]
      }

      return letters[0] + letters[1]
    }

    return letters[0][0] + letters[letters.length - 1][0]
  }
}
