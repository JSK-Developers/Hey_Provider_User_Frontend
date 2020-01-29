import {  OnInit } from '@angular/core';

import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
    selector: 'app-customer-service-model',
    templateUrl: './customer-services-model.component.html',
    styleUrls: ['./customer-services-model.component.scss']
})
export class CustomerServiceModelComponent {

    title: string;
    closeBtnName: string;
    list: any[] = [];
    modalRef: BsModalRef | null;
    modalRef2: BsModalRef;
    constructor(private modalService: BsModalService) {}
   
    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    }
    openModal2(template: TemplateRef<any>) {
      this.modalRef2 = this.modalService.show(template, { class: 'second' });
    }
    closeFirstModal() {
      if (!this.modalRef) {
        return;
      }
   
      this.modalRef.hide();
      this.modalRef = null;
    }
  }
    //constructor(public bsModalRef: BsModalRef) { }

   


    
