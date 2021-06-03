import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-icard',
  templateUrl: './icard.component.html',
  styleUrls: ['./icard.component.css']
})

export class IcardComponent implements OnInit {

  gridColumns = 4;
  countries: Country[];

  constructor(
    private httpClient: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.getCountries()
  }

  getCountries() {
    this.httpClient.get<any>('http://api.worldbank.org/v2/country?format=json&region=SSA&per_page=300').subscribe(
      response => {
        console.log(response[1]);
        this.countries = response[1];
      }
    );
  }
}

class Country {
  constructor(
    public iso2Code: string,
    public name: string,
    public capitalCity: string
  ) {
  }
}

export class Response {
  constructor(
    public meta: Object,
    public countries: Country[],
  ) {
  }
}
