export class Beneficiary {
    name: string;
    accountNumber: string;
    bankId: string;
    bankName: string;
    address:PstlAdr;

}

class PstlAdr {
    StrtNm: "Commercial St";
    BldgNb: "262 ";
    PstCd: "ME 04101";
    TwnNm: "Portland";
    Ctry: "US";
}