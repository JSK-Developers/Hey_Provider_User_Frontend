import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { Observable, observable } from 'rxjs';
import { BookingField } from './bookingfield';
import { error } from 'util';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent  {


  // message = 'helloworld'
  // welcomeMessageFromService: string
  // hello: 'smit'
  // bookingForm: FormGroup;
  // name: string = "";
  // // email: string = "";
  // number: string = "";
  // date: string = "";
  // time: string = "";
  // addresss1: string = "";
  // addresss2: string = "";
  // city: string = "";
  // state: string = "";
  // pincode: string = "";
  // submitted: boolean = false;
  // datePipe: Date;
  // minDate: Date;
  // colorTheme = 'theme-orange';
  // phoneNumber = "^(\+\d{1,3}[- ]?)?\d{10}$";
  // allbookings: Observable<BookingFormComponent>;

  // bsConfig: Partial<BsDatepickerConfig>;

  // bookingfield: BookingField;
  // constructor(private formbulder: FormBuilder,
  //   private route: ActivatedRoute,
  //   private service: WelcomeDataService
  // ) {


  //   this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
  //   this.minDate = new Date();
  //   this.minDate.setDate(this.minDate.getDate() + 1);
  //   this.bookingForm = formbulder.group({
  //     name: ['', Validators.required],
  // email: ['', Validators.compose([
  //   Validators.required,
  //   Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
  // ])],
  // email: ['', [Validators.required, Validators.email]],
  // number: ['', [Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+))$/)]],
  // date: ['', Validators.required],
  // time: ['', Validators.required],
  // addresss1: ['', Validators.required],
  // addresss2: ['', Validators.required],
  // city: ['', Validators.required],
  //       state: ['', Validators.required],
  //       pincode: ['', [Validators.required, Validators.pattern(/^(\d{6}|\w+([\.-]?\w+))$/)]],
  //       acceptTerms: [false, Validators.requiredTrue]
  //     })
  //     this.bookingfield = {
  //       name: '',
  //       number: '',
  //       // date: '',
  //       time: '',
  //       addresss1: '',
  //       addresss2: '',
  //       // city: '',
  //       state: '',
  //       pincode: '',
  //     }
  //   }
  //   get f() {
  //     return this.bookingForm.controls;
  //   }

  //   ngOnInit() {
  //   }
  //   PostData(bookingForm: NgForm) {


  //     // console.log(bookingForm.controls);
  //     this.submitted = true;
  //     if (this.bookingForm.invalid) {
  //       return;
  //     }
  //     this.bookingfield.name = this.bookingForm.get('name').value;
  //     this.bookingfield.number = this.bookingForm.get('number').value;
  //     // this.bookingfield.date = this.bookingForm.get('date').value;
  //     this.bookingfield.time = this.bookingForm.get('time').value;
  //     this.bookingfield.addresss1 = this.bookingForm.get('addresss1').value;
  //     this.bookingfield.addresss2 = this.bookingForm.get('addresss2').value;
  //     // this.bookingfield.city = this.bookingForm.get('city').value;
  //     this.bookingfield.pincode = this.bookingForm.get('pincode').value;
  //     this.bookingfield.state = this.bookingForm.get('state').value;
  //     this.bookingForm.reset();


  //     alert('form fields are validated successfully!');
  //   }
  //   // createbook(book: BookingFormComponent) {
  //   //   this.bookingservices.servicebook(book).subscribe
  //   // }

  //   onReset() {
  //     this.submitted = false;
  //     this.bookingForm.reset();
  //   }
  //   getWelcomeMessage() {
  //     console.log(this.service.executeHelloWorldBeanService());
  //     this.service.executeHelloWorldBeanService().subscribe(
  //       response => this.handelSuccessfulResponse(response),
  //       error => this.handelErrorResponse(error)
  //     );
  //     // console.log('last line')
  //     //console.log('get welcome message');
  //   }

  //   getWelcomeMessageWithParameter() {
  //     //console.log(this.service.executeHelloWorldServiceWithPathVariable());
  //     this.service.executeHelloWorldServiceWithPathVariable(this.hello).subscribe(
  //       response => this.handelSuccessfulResponse(response),
  //       error => this.handelErrorResponse(error)
  //     );
  //     // console.log('last line')
  //     //console.log('get welcome message');
  //   }


  //   handelSuccessfulResponse(response) {
  //     this.welcomeMessageFromService = response.message
  //     //console.log(response);
  //     //console.log(response.message);
  //   }

  //   handelErrorResponse(error) {
  //     // console.log(error)
  //     // console.log(error.error)
  //     // console.log(error.error.message)
  //     this.welcomeMessageFromService = error.error.message
  //   }

}
