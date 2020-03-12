import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { HttpservicesService } from '../Http_Services_Api/httpservices.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  islogin: boolean = false;
  loginForm: FormGroup;
  userNames = "";
  passwords = "";
  submitted: boolean = false;
  registration = [];
  datauname;
  datapass;

  getlist(name) {
    this.userRegistrationServices.getRegistrationListByName(name).subscribe(
      data => {
        if (data[0] != null) {
          this.registration = data;
          this.datauname = data[0].userName;
          this.datapass = data[0].password;
          if (this.passwords == this.datapass && this.userNames == this.datauname) {
            this.userRegistrationServices.sessonstorage(this.userNames)
            this.router.navigate(['home']);
            // sessionStorage.setItem('authenticateUser', this.userNames);
          } else {
            alert("please try again");
          }
          console.log(data[0].userName);
        } else {
          alert("not valid")
        }
      }
    )
  }
  get f() {
    return this.loginForm.controls;
  }


  PostData(loginForm) {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.userNames = this.loginForm.get('userNames').value;
      this.passwords = this.loginForm.get('passwords').value;
      this.getlist(this.loginForm.get('userNames').value);
      // console.log(this.registration.find('name').value)
    }


  }

  constructor(private router: Router, private userRegistrationServices: HttpservicesService, formbulder: FormBuilder) {
    this.loginForm = formbulder.group({
      userNames: [null, Validators.required],
      passwords: [null, Validators.required],

    })
  }
  ngOnInit() {

  }



}
