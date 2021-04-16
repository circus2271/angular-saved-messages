import { Component, OnInit } from '@angular/core';
import { DogsPhotosService} from "../shared/dogs-photos.service";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  photo$: Observable<string>

  constructor(public dogsPhotos: DogsPhotosService) { }

  getPhoto(): void {
    this.photo$ = this.dogsPhotos.getPhoto()
      .pipe(map(photo => photo.message))
  }

  ngOnInit(): void {
    this.getPhoto()
  }

}
