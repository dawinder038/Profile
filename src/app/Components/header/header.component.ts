import { Component, OnInit, setTestabilityGetter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  image: any;
  firstName: any;
lastName: any;
  constructor() { }

  ngOnInit(): void {
    this.image = String(sessionStorage.getItem('image'));
    this.firstName = String(sessionStorage.getItem('firstName'))
    this.lastName = String(sessionStorage.getItem('lastName'))
  }
}
