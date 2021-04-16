import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';

interface IDogPhoto {
  message: string,
  success: boolean
}

@Injectable({
  providedIn: 'root',
})
export class DogsPhotosService {
  constructor(private http: HttpClient) {}

  getPhoto(): Observable<IDogPhoto> {
    return this.http.get<IDogPhoto>('https://dog.ceo/api/breeds/image/random')
  }
}
