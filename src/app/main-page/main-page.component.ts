import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  cars: Array<{
    image: string;
    model: string;
    yearproduction: number;
    fueltype: string;
    numberofseats: number;
    price: number;
  }> = [
    {
      image: './assets/img/audi_r8.jpg',
      model: 'Audi R8',
      yearproduction: 2010,
      fueltype: 'benzin',
      numberofseats: 2,
      price: 78000,
    },
    {
      image: './assets/img/audi_rs4.jpg',
      model: 'Audi RS4',
      yearproduction: 2008,
      fueltype: 'benzin',
      numberofseats: 4,
      price: 88000,
    },
    {
      image: './assets/img/audi_tt.jpg',
      model: 'Audi TT',
      yearproduction: 2005,
      fueltype: 'benzin',
      numberofseats: 2,
      price: 45000,
    },
    {
      image: './assets/img/bmw_1.jpg',
      model: 'BMW 330i',
      yearproduction: 2011,
      fueltype: 'benzin',
      numberofseats: 4,
      price: 55000,
    },
    {
      image: './assets/img/bmw_2.jpg',
      model: 'BMW M3',
      yearproduction: 2011,
      fueltype: 'benzin',
      numberofseats: 2,
      price: 75000,
    },
    {
      image: './assets/img/vw_r32.jpg',
      model: 'Golf R32',
      yearproduction: 2004,
      fueltype: 'benzin',
      numberofseats: 4,
      price: 39000,
    },
  ];

  name = new FormControl('');

  formInfo = new FormGroup({
    image: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    yearproduction: new FormControl('', Validators.required),
    fueltype: new FormControl('', Validators.required),
    numberofseats: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });

  valueFromInputs() {
    if (this.formInfo.valid) {
      let values: any = this.formInfo.value;
      console.log(values);
      this.cars.push(values);
      this.formInfo.reset();
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
