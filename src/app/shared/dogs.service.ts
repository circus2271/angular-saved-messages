import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IDogPhoto {
  message: string,
  success: boolean
}

export interface IBreedsList {
  message: any,
  success: boolean
}

@Injectable({
  providedIn: 'root',
})
export class DogsService {
  constructor(private http: HttpClient) {}

  getPhoto(): Observable<IDogPhoto> {
    return this.http.get<IDogPhoto>('https://dog.ceo/api/breeds/image/random')
  }

  getBreedsList(): Observable<IBreedsList> {
    return this.http.get<IBreedsList>('https://dog.ceo/api/breeds/list/all')
  }
}
