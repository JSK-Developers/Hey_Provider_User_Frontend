import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // #####
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BsDatepickerModule, ModalModule, TabsModule } from 'ngx-bootstrap'; // #####
import { AboutUsComponent } from './about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { HeaderImgComponent } from './header-img/header-img.component';
import { MiddleHomeComponent } from './middle-home/middle-home.component';
import { CustomerServicesComponent } from './customer-services/customer-services.component';
import { CustomerServiceModelComponent } from './customer-services/customer-service-models/customer-services-model.component';
import { HttpModule } from '@angular/http';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HttpservicesService } from './Http_Services_Api/httpservices.service';
import { HttpClientModule } from '@angular/common/http';
import { ServiceFormComponent } from './service-form/service-form.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ContactusComponent,
    AboutUsComponent,
    // HeaderImgComponent,
    // MiddleHomeComponent,
    BookingFormComponent,
    HeaderImgComponent,
    MiddleHomeComponent,
    ErrorComponent,
    LogoutComponent,
    CustomerServicesComponent,
    CustomerServiceModelComponent,
    UserRegistrationComponent,
    ServiceFormComponent
  ],
  entryComponents: [
    CustomerServiceModelComponent
  ],

  imports: [
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    FormsModule, ReactiveFormsModule // #####

  ],

  providers: [
    HttpservicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
