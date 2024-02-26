import { Component, Input, OnInit } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  template: `
    <label for="location-search">Search for new place</label>
    <input #search id="location-search" placeholder="Ex.Chicago" />
    <button (click)="searchHousingLocation(search.value)">Search</button>

    <article *ngFor="let location of locationList">
      <p>{{ location.name }}</p>
    </article>
  `,
  styleUrls: ['./housing-list.component.css'],
})
export class HousingListComponent implements OnInit {
  @Input({ required: true }) locationList: HousingLocation[] = [];

  constructor() {}

  ngOnInit(): void {}
  searchHousingLocation(searchText: string) {
    console.log(searchText);
  }
}
