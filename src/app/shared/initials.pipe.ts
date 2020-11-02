import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(username: string): string {
    const words = username.trim().split(' ');

    if (words.length === 1) {
      const name = words[0];

      if (name.length === 1) {
        return name[0]
      }

      return name[0] + name[1]
    }

    return words[0][0] + words[words.length - 1][0]
  }
}
