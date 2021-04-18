import {Injectable} from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DogsService } from "../shared/dogs.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

@Injectable({providedIn: 'root'})
export class BreedsResolver implements Resolve<any> {
  constructor(private dogsService: DogsService) {
  }

  resolve(): Observable<any> {
    return this.dogsService.getBreedsList()
      .pipe(map (data => data.message))
  }
}
