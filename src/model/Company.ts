export class Company {
    
    id: string;
    name: string;
    address: PstlAdr;
    accounts: AccountComp[];    
    beneficiarys: Beneficiary[];

}

export class Beneficiary {
    name: string;
    accountNumber: string;
    bankId: string;
    bankName: string;
    address: PstlAdr;

}

class Bank{
    memberid: string;
    name: string;
}

class AccountComp {
    
    bank: Bank;
    number: string;
    currency: string;
}

class PstlAdr {
    StrtNm: string;
    BldgNb: string;
    PstCd: string;
    TwnNm: string;
    Ctry: string;
}