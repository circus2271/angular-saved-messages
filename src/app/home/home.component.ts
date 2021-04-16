import { Component, OnInit } from '@angular/core';
import { DogsService } from "../shared/dogs.service";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  photo$: Observable<string>

  constructor(private dogsService: DogsService) { }

  getPhoto(): void {
    this.photo$ = this.dogsService.getPhoto()
      .pipe(map(photo => photo.message))
  }

  ngOnInit(): void {
    this.getPhoto()
  }

}
