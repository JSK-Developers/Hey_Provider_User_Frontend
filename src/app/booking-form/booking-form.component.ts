import { Component } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { BsDatepickerConfig, BsModalService } from 'ngx-bootstrap';
import { Observable } from 'rxjs';
import { ACregistrationfield } from './bookingfield';
import { Router } from '@angular/router';
import { HttpservicesService } from '../Http_Services_Api/httpservices.service';
import { CustomerServicesComponent } from '../customer-services/customer-services.component';
import { Providers } from './providerList';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent {


  message = 'helloworld'
  welcomeMessageFromService: string
  hello: 'smit'
  bookingForm: FormGroup;
  name: string = "";
  // email: string = "";
  number: string = "";
  date: string = "";
  time: string = "";
  addresss1: string = "";
  addresss2: string = "";
  city: string = "";
  state: string = "";
  pincode: string = "";
  submitted: boolean = false;
  datePipe: Date;
  minDate: Date;
  colorTheme = 'theme-orange';
  phoneNumber = "^(\+\d{1,3}[- ]?)?\d{10}$";
  allbookings: Observable<BookingFormComponent>;
  bsConfig: Partial<BsDatepickerConfig>;
  ACregistrationfield: ACregistrationfield;
  serviceName = "Window AC Service";
  serviceName1 = "Split AC Service";
  serviceName2 = "Less/No Cooling";
  serviceName3 = "AC Not Starting";
  serviceName4 = "Noise Issue";
  serviceName5 = "Water Leakege";
  values: number = 0;
  values1: number = 0;
  values2: number = 0;
  values3: number = 0;
  values4: number = 0;
  values5: number = 0;
  total: number;
  count = 0;
  count1 = 0;
  count2 = 0;
  count3 = 0;
  count4 = 0;
  count5 = 0;
  prize = 100;
  prize1 = 100;
  prize2 = 100;
  prize3 = 100;
  prize4 = 100;
  prize5 = 100;
  ratiing1 = 3;
  ratiing2 = 2;
  ratiing3 = 4;
  providername1 = "Joshi Nisarg";
  providername2 = "Chintan Rana";
  providername3 = "Sathwara Bijesh";
  age1 = "21";
  age2 = "21";
  age3 = "21";

  customerModel: CustomerServicesComponent;
  prizelist = true;
  address_provider = false;
  payment_display = false;

  constructor(formbulder: FormBuilder,
    private userRegistrationServices: HttpservicesService) {
    this.prizelist = true;
    this.address_provider = false;
    this.payment_display = false;
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() + 1);
    this.bookingForm = formbulder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      number: ['', [Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+))$/)]],
      date: ['', Validators.required],
      time: ['', Validators.required],
      addresss1: ['', Validators.required],
      addresss2: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^(\d{6}|\w+([\.-]?\w+))$/)]],
      acceptTerms: [false, Validators.requiredTrue],
    })
    this.ACregistrationfield = {
      name: '',
      number: '',
      date: '',
      time: '',
      addresss1: '',
      addresss2: '',
      city: '',
      state: '',
      pincode: '',
    }
  }
  get f() {
    return this.bookingForm.controls;
  }

  ngOnInit() {
    this.getlist();

  }
  PostData(bookingForm: NgForm) {


    console.log(bookingForm.controls);
    this.submitted = true;

    this.ACregistrationfield.name = this.bookingForm.get('name').value;
    this.ACregistrationfield.number = this.bookingForm.get('number').value;
    this.ACregistrationfield.date = this.bookingForm.get('date').value;
    this.ACregistrationfield.time = this.bookingForm.get('time').value;
    this.ACregistrationfield.addresss1 = this.bookingForm.get('addresss1').value;
    this.ACregistrationfield.addresss2 = this.bookingForm.get('addresss2').value;
    this.ACregistrationfield.city = this.bookingForm.get('city').value;
    this.ACregistrationfield.pincode = this.bookingForm.get('pincode').value;
    this.ACregistrationfield.state = this.bookingForm.get('state').value;
    this.userRegistrationServices.ACservicebook(this.ACregistrationfield).subscribe(() => {
      console.log('register success');
    }, () => {
      console.log("error");
    }
    )

  }
  // createbook(book: BookingFormComponent) {
  //   this.bookingservices.servicebook(book).subscribe
  // }

  onReset() {
    this.submitted = false;
    this.bookingForm.reset();
  }
  onNext() {
    this.address_provider = false;
    this.payment_display = true;
  }
  updateCount(adjustment = 1) {
    this.values = (this.count += adjustment) * this.prize;
    return this.values;
  }
  updateCount1(adjustment = 1) {
    this.values1 = (this.count1 += adjustment) * this.prize1;
    return this.values1;
    // return (this.count1 * this.prize1);
  }
  updateCount2(adjustment = 1) {
    this.values2 = (this.count2 += adjustment) * this.prize2;
    return this.values2;
  }
  updateCount3(adjustment = 1) {
    this.values3 = (this.count3 += adjustment) * this.prize3;
    return this.values3;
  }
  updateCount4(adjustment = 1) {
    this.values4 = (this.count4 += adjustment) * this.prize4;
    return this.values4;
  }
  updateCount5(adjustment = 1) {
    this.values5 = (this.count5 += adjustment) * this.prize5;
    return this.values5;
  }
  finalvalue() {
    this.total = this.values + this.values1 + this.values2 + this.values3 + this.values4 + this.values5;
    alert('Your Total Prize is ' + this.total);
    this.address_provider = true;
    this.prizelist = false;
  }
  Providers: Providers;

  rate: any = 7;
  isReadonly: boolean = true;
  providers: Observable<Providers[]>;
  getlist() {
    this.userRegistrationServices.getProviderList().subscribe(
      data => {
        this.providers = data;
      }
    )
  }


}



