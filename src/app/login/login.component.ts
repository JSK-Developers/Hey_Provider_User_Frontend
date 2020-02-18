import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { HttpservicesService } from '../Http_Services_Api/httpservices.service';
import { RegistrationField } from '../booking-form/bookingfield';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  username = "";
  password = "";
  submitted: boolean = false;
  // username = 'jskdeveloper'
  // password = ''
  // errorMessage = 'Invalid Credentials'
  // invalidLogin = false
  // RegistrationField[] =[];
  registration: [] = [];

  getlist(name) {
    this.userRegistrationServices.getRegistrationListByName(name).subscribe(
      data => {
        this.registration = data;
        console.log(data);
      }
    )
  }
  get f() {
    return this.loginForm.controls;
  }

  valid() {
    for (let i = 0; i <= this.registration.length; i++) {
      console.log(i);
    }

    // console.log(this.registration.map);
  }
  PostData(loginForm) {
    this.getlist(this.loginForm.get('username').value);
    // console.log(this.registration.find('name').value)
    console.log(loginForm.controls);
    for (let i; i <= this.registration.length; i++) {
      // console.log(i);
    }

  }

  constructor(private router: Router, private userRegistrationServices: HttpservicesService, formbulder: FormBuilder) {
    this.loginForm = formbulder.group({
      username: [null, Validators.email],
      password: [null, Validators.required],

    })
  }
  ngOnInit() {
    this.valid();

  }



}
