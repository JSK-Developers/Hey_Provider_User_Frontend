import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
    selector: 'app-customer-service-model',
    templateUrl: './customer-services-model.component.html',
    styleUrls: ['./customer-services-model.component.scss']
})
export class CustomerServiceModelComponent implements OnInit {

    title: string;
    closeBtnName: string;
    list: any[] = [];

    constructor(public bsModalRef: BsModalRef) { }

    ngOnInit() {
        this.list.push('PROFIT!!!');
    }

}
