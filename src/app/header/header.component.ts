import { Component, OnInit, Inject, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  // isUserLoggidIn: boolean = false
  constructor() { }

  ngOnInit() {
    // this.isUserLoggidIn = this.hardcodedAuthenticationervice.isUserLoggedIn();
  }


}
