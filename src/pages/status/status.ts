import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { OnInit } from '@angular/core';
import { CreditorPaymentActivationRequest } from '../../model/stet/CreditorPaymentActivationRequest';

// import { FilterStatusPipe } from '../pipes/filter-status/filter-status';




@Component({
  selector: 'status',
  templateUrl: 'status.html'
})
export class Status implements OnInit {

  payments: CreditorPaymentActivationRequest[];
  paymentIndex:number;
  today: Date;
  listStatus: string = 'PDNG';
  requests: any;



  constructor(private http: Http) {
    this.today = new Date();
  }

  ngOnInit(): void {
      this.requests = {
          'countOf' : {
              'acsc' : 0,
              'pdng' : 0,
              'rjct' : 0
          }
      }
    this.http.get('http://51.141.26.55/api/service-gpp-wrapper/elasticsearch/payments_by_cdtr?cdtr=Beer%20Brewing%20Machine%20Factory')
      .map(res => res.json())
      .subscribe(data => {
        this.payments = data;
        for (let value of data) {
            if(value.ExtTransactionStatus.extrnSts == 'ACSC'){
                this.requests.countOf.acsc += 1;
            }
            if(value.ExtTransactionStatus.extrnSts == 'PDNG'){
                this.requests.countOf.pdng += 1;
            }
            if(value.ExtTransactionStatus.extrnSts == 'RJCT'){
                this.requests.countOf.rjct += 1;
            }
        }
        console.log(data);
      },
      err => { console.log("Oops!"); });
  }
  deleteFromPayments(index:number) {
    this.payments.splice(index, 1);
  }
}
