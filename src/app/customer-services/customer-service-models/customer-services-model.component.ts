import { OnInit } from '@angular/core';

import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ACServiceModelComponent } from '../AcRepairServices/AcRepairService.component';
import { CustomerServicesComponent } from '../customer-services.component';
@Component({
  selector: 'app-customer-service-model',
  templateUrl: './customer-services-model.component.html',
  styleUrls: ['./customer-services-model.component.scss']
})
export class CustomerServiceModelComponent {
  ACModalRef: BsModalRef;

  constructor(private modalService: BsModalService, public bsModalRef: BsModalRef) { }
  ACrepair() {
    this.ACModalRef = this.modalService.show(ACServiceModelComponent, Object.assign({}, { class: 'gray modal-lg' }));

    this.ACModalRef.content.closeBtnName = 'Close';

  }
}
