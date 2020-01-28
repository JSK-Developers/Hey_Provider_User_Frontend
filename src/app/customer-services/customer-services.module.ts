import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal'
import { FormsModule } from '@angular/forms';
import { CustomerServicesRoutingModule } from './customer-services-routing.module';
import { CustomerServicesComponent } from './customer-services.component';
import { CustomerServiceModelComponent } from './customer-service-models/customer-services-model.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations: [
        CustomerServicesComponent,
        CustomerServiceModelComponent
    ],
    entryComponents: [
        CustomerServiceModelComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ModalModule.forRoot(),
        CommonModule,
        CustomerServicesRoutingModule
    ]
})
export class CustomerServicesModule { } 