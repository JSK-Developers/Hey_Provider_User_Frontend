import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = 'jskdeveloper'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false


  constructor(private router: Router) { }
  ngOnInit() {
  }



}
