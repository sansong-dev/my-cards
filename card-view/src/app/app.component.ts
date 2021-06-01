import { Component } from '@angular/core';
import {countries} from './countries-list'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countries = countries;
  gridColumns = 4;
}
