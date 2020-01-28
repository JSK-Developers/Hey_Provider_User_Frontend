import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { HttpservicesService } from '../Http_Services_Api/httpservices.service';
import { RegistrationField } from '../booking-form/bookingfield';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  submitted: boolean = false;
  registrationfield: RegistrationField;


  constructor(private formbulder: FormBuilder, private userRegistrationServices: HttpservicesService,
    private router: Router) {
    this.registrationForm = formbulder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, /* Validators.email */]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
    this.registrationfield = {
      userName: '',
      email: '',
      password: '',
      confirmPassword: ''
      // number: '',
      // date: '',
      //time: '',
      // city: '',
      //state: '',
      //pincode: '',
    }
  }
  get f() {
    return this.registrationForm.controls;
  }

  ngOnInit() {
  }
  PostData(registrationForm: NgForm) {
    this.submitted = true;
    this.registrationfield.userName = this.registrationForm.get('userName').value;
    this.registrationfield.email = this.registrationForm.get('email').value;
    this.registrationfield.password = this.registrationForm.get('password').value;
    this.registrationfield.confirmPassword = this.registrationForm.get('confirmPassword').value;
    this.userRegistrationServices.registration(this.registrationfield).subscribe(registrationForm => {
      console.log('register success');
    }, error => {
      console.log("error");
    }
    )
    this.router.navigate(['login']);
  }



}



