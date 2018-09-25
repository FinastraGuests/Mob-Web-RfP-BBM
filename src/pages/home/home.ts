import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AlertController } from 'ionic-angular';
import { OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Company, Beneficiary } from '../../model/Company';
import { CreditorPaymentActivationRequest } from '../../model/stet/CreditorPaymentActivationRequest';





//import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit {

    amount: number = 0;
    amountGuiness: number = 0;
    amountBudweiser: number = 0;
    amountSamuelAdams: number = 0;
    totalAmount: string;
    rmtInf: string;
    lobsterPrice: number;
    displayDate = new Date().toLocaleDateString();
    beneficiarys: Beneficiary[];
    chosenBeneficiary: Beneficiary;
    payment: CreditorPaymentActivationRequest;
    today: Date;
    company: Company;
    invoiceNumber: string;
    dateDash: string;
    info: string;



    constructor(private http: Http, private alertCtrl: AlertController, private datePipe: DatePipe) {
        this.resetPayment();

    }
    refresh(): void {
        window.location.reload();
    }
    resetPayment() {
        this.amount = 0;
        this.amountGuiness = 0;
        this.amountBudweiser = 0;
        this.amountSamuelAdams = 0;
        this.payment = JSON.parse('{"GrpHdr":{"MsgId":"Sibos007","CredDtTm":"2017-07-12T15:43:10.970","NbOfTxs":1,"InitgPty":{"Id":{"OrgId":{"Othr":{"Id":"USACUPISP"}}}}},"PmtInf":{"DbtrAcct":{"Id": {"Othr": { "Id": ""}}},"PmtInfId":"PMTSibos007","PmtMtd":"TRF","Dbtr":{"PstlAdr":{"StrtNm":"5000EMcDowellRd","BldgNb":"12","PstCd":"85215","TwnNm":"Mesa","Ctry":"US"},"Nm":"DE89830944950007009670"},"Cdtr":{"PstlAdr":{"StrtNm":"400MainSt","BldgNb":"12","PstCd":"06118","TwnNm":"EastHartford","Ctry":"US"}},"ChrgBr":"SLEV","CdtTrfTx":[{ "CdtrAcct":{"Id": {"Othr": { "Id": ""}}},"Cdtr":{}, "PmtId":{"InstrId":"INSSibos007","EndToEndId":"E2ESibos007"},"Amt":{"InstdAmt":100.45,"Ccy":"USD"},"CdtrAgt":{"FinInstnId":{"Bicfi":"ROZADEFFXXX"}},"RmtInf":{"Ustrd":["RemmitenceInformation"]}}]}}');
        this.today = new Date();
        this.invoiceNumber = this.createRandomInvoiceNumber();
        this.dateDash = this.datePipe.transform(this.today, 'yyyy-MM-dd');
        this.chosenBeneficiary = new Beneficiary();
        this.chosenBeneficiary.name = "";
    }

    createMessageId() {
        var message = "LBSTR";
        var randomNum = "";
        var i;

        for (i = 0; i < 7; i++) {
            var random = (Math.floor(Math.random() * 10)).toString();
            randomNum = randomNum + random;
        }

        return message + randomNum;


    }

    createRandomInvoiceNumber() {

        var randomNum = "";
        var i;

        for (i = 0; i < 5; i++) {
            var random = (Math.floor(Math.random() * 10)).toString();
            randomNum = randomNum + random;
        }

        return randomNum;


    }

    submit() {
        var id = this.createMessageId();

        this.payment.GrpHdr.MsgId = id;
        this.payment.GrpHdr.NbOfTxs = 1;

        this.payment.PmtInf.PmtInfId = id;

        this.payment.PmtInf.Dbtr.Nm = this.chosenBeneficiary.name;
        this.payment.PmtInf.Dbtr.PstlAdr.Ctry = this.chosenBeneficiary.address.Ctry;
        this.payment.PmtInf.DbtrAcct.Id.Othr.Id = this.chosenBeneficiary.accountNumber;
        this.payment.PmtInf.CdtTrfTx[0].CdtrAcct.Id.Othr.Id = this.company.accounts[0].number;

        this.payment.PmtInf.CdtTrfTx[0].Amt.InstdAmt = (this.amountSamuelAdams * 12.95 + this.amountBudweiser * 9.95 + this.amountGuiness * 15.99).toString();
        var datePipe = new DatePipe("en-US");
        this.payment.PmtInf.CdtTrfTx[0].RmtInf.Ustrd[0] = this.amountSamuelAdams + this.amountBudweiser + this.amountGuiness + " Beer px";
        this.payment.PmtInf.CdtTrfTx[0].PmtId.InstrId = id;
        this.payment.PmtInf.CdtTrfTx[0].PmtId.EndToEndId = id;
        this.payment.PmtInf.ReqdExctnDt = this.today;

        this.payment.PmtInf.CdtTrfTx[0].Cdtr.Nm = this.company.name;

        let headers = new Headers;
        headers.append('Content-Type', 'application/json');
        headers.append("Ocp-Apim-Subscription-Key", "bcf707acdb764c3d8339c3e36877bd29")

        let url = 'http://51.141.26.55/api/service-gpp-wrapper/gpp/request_for_payments/submit';
        let ob = this.http.post(url, JSON.stringify(this.payment), { headers: headers })
        .map(res => {
            console.log(res);
            switch (res.status) {
                case 201:
                this.presentAlert(this.payment);
                break;
                default:

                break;
            }
        })
        .subscribe(
            res => {
                this.resetPayment();
                console.log(res);
            },
            err => {
                let mid = err.headers.get("PaymentMID");
                let sts = err.headers.get("PaymentStatus");
                let text = "Request payment [" + mid + "] status is " + sts;
                this.presentTextAlert(text);
            }
        );

    }


    presentAlert(payment: CreditorPaymentActivationRequest) {
        let alert = this.alertCtrl.create({
            // message: 'Sent to <br>' + payment.PmtInf.Dbtr.Nm,
            message: `
            <div class="meesage-wraper">
            <div class="like-icon"></div>
            <div class="message">
            Your payment request has<br />been sent successfully
            </div>
            </div>
            `,
            cssClass: 'thanku-popup',
            buttons: ['OK']
        });
        alert.present();
    }

    presentTextAlert(text: string) {
        let alert = this.alertCtrl.create({
            title: 'Payment request error',
            subTitle: text,
            buttons: ['Done']
        });
        alert.present();
    }

    ngOnChanges(): void {

    }

    ngOnInit(): void {

        this.http.get('http://51.140.226.230/api/service-companies/companies/BBMFACTORY')
        .map(res => res.json())
        .subscribe(data => {
            this.company = data;
            this.beneficiarys = data.beneficiarys;
        },

        err => { console.log("Oops!"); });

    }

}
