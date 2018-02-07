import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { OnInit } from '@angular/core';
import { CreditorPaymentActivationRequest } from '../../model/stet/CreditorPaymentActivationRequest';


@Component({
  selector: 'status',
  templateUrl: 'status.html'
})
export class Status implements OnInit {

  payments: CreditorPaymentActivationRequest[];
  paymentIndex:number;
  today: Date;


  constructor(private http: Http) { 
    this.today = new Date();
  }

  ngOnInit(): void {

    this.http.get('http://51.141.26.55/api/service-gpp-wrapper/elasticsearch/payments_by_cdtr?cdtr=Beer%20Brewing%20Machine%20Factory')
      .map(res => res.json())
      .subscribe(data => {
        this.payments = data;
      },

      err => { console.log("Oops!"); });
  }


  deleteFromPayments(index:number) {
    this.payments.splice(index, 1);

   

  }


 
    
}
