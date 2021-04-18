import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-breeds-list',
  templateUrl: './breeds-list.component.html',
  styleUrls: ['./breeds-list.component.scss']
})
export class BreedsListComponent implements OnInit {
  breeds: any

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.breeds = this.route.snapshot.data.breeds
  }

}
