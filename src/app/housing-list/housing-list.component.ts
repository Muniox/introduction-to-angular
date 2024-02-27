import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css'],
})
export class HousingListComponent implements OnInit {
  @Input({ required: true }) locationList: HousingLocation[] = [];
  @Output() selectedLocationEvent = new EventEmitter<HousingLocation>();

  results: HousingLocation[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log('inicjalizacja komponentu');
  }
  searchHousingLocation(searchText: string) {
    if (!searchText) return;

    this.results = this.locationList.filter((location) =>
      location.city.toLowerCase().includes(searchText.toLowerCase()),
    );
  }

  selectHousingLocation(location: HousingLocation) {
    this.selectedLocationEvent.emit(location);
  }
}
