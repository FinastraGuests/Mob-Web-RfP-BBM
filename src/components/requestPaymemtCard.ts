import { Component } from '@angular/core';
import { Input, Output } from '@angular/core';
import { CreditorPaymentActivationRequest } from '../model/stet/CreditorPaymentActivationRequest';
import 'rxjs/add/operator/map';
import { OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'payment-card',
    templateUrl: 'requestPaymemtCard.html'
})
export class RequestPaymentCard implements OnInit{

    @Input() payment: CreditorPaymentActivationRequest;
    @Input() paymentIndex: number;
    @Output() deleteref = new EventEmitter();

    status: string;

    constructor() {
    }

    ngOnInit(): void {
        switch (this.payment.ExtTransactionStatus.extrnSts) {
            case "ACSC":
            this.status="Paid";
            break;
            case "PDNG":
            this.status = "Pending";
            break;
            case "RJCT":
            this.status = "Declined"
            break;
        }
    }
}
