import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Country } from 'src/app/types/api';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private source: Country[];
  searchFilter?: string;
  regionFilter?: string;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getAllCountries().subscribe((countries) => {
      this.source = countries;
    });
  }

  get countries() {
    return this.source
      ? this.source
          .filter((country) =>
            this.searchFilter
              ? country.name
                  .toLowerCase()
                  .includes(this.searchFilter.toLowerCase())
              : country
          )
          .filter((country) =>
            this.regionFilter
              ? country.region.includes(this.regionFilter)
              : country
          )
      : this.source;
  }
}
