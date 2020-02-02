import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ServiceFormComponent } from './service-form/service-form.component';
// const routes: Routes = [
//   {
//     path: '',
//     component: HomeComponent
//   },
//   { path: 'login', component: LoginComponent },
//   { path: 'contactUs', component: ContactusComponent },
//   { path: 'home', component: HomeComponent },
//   { path: 'aboutUs', component: AboutUsComponent },
// ];
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'book/:name', component: BookingFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'contactUs', component: ContactusComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'service-form', component: ServiceFormComponent },
  { path: '**', component: ErrorComponent } ,
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]

})
export class AppRoutingModule {
  static forRoot: any;
}
