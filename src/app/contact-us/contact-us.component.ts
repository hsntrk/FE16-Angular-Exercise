import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainPageComponent } from '../main-page/main-page.component';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit, OnChanges {
  name = new FormControl('');
  // constructor() {}
  carsContact = new MainPageComponent().cars;

  formInfo = new FormGroup({
    image: new FormControl(''),
    model: new FormControl('', Validators.required),
    yearproduction: new FormControl('', Validators.required),
    fueltype: new FormControl('', Validators.required),
    numberofseats: new FormControl('', Validators.required),
    price: new FormControl(''),
  });

  valueFromInputs() {
    if (this.formInfo.valid) {
      let values: any = this.formInfo.value;
      console.log(values);
      this.carsContact.push(values);
    }
  }

  ngOnInit(): void {}
  ngOnChanges(): void {}
}
