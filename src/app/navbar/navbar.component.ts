import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  counter: number = 0;

  clickCounter() {
    this.counter += 10;
  }

  constructor() {}

  ngOnInit(): void {}
}
