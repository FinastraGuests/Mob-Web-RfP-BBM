import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Input, Output } from '@angular/core';
import { CreditorPaymentActivationRequest } from '../model/stet/CreditorPaymentActivationRequest';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { OnInit, EventEmitter } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { HttpErrorResponse } from '@angular/common/http/src/response';




@Component({
  selector: 'payment-card',
  templateUrl: 'requestPaymemtCard.html'
})
export class RequestPaymentCard implements OnInit{

  @Input() payment: CreditorPaymentActivationRequest;
  @Input() paymentIndex: number;
  @Output() deleteref = new EventEmitter();

  status: string;

  constructor(private http: Http, private alertCtrl: AlertController) {

    



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







