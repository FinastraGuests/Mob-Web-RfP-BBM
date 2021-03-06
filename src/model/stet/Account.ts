/**
 * PSD2 ASPSP services for AISP, PISP and PIISP.
 * This API intends to provide an interface between - Account Servicing Payment Service Providers (ASPSP) - Third Party (Payment Service) Providers (TPP)  TPP may act with different roles as described below: - Account Information Service Providers (AISP) - Payment Initiation Service Providers (PISP) - Payment Instrument Issuer Service Providers (PIISP)  The Payment Service User (PSU) is the owner of the accounts held by the ASPSP and gives accreditations to the TPP in order to access his accounts information or initiates payment from these accounts  The API is designed on a REST model using JSON structures.  The Richardson Maturity Model is applied on level three using HAL HYPERMEDIA links 
 *
 * OpenAPI spec version: 1.2.2
 * Contact: psd2@stet.eu
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

/**
 * PSU account that is made available to the TPP 
 */
export interface Account {
    /**
     * Id of the account as defined by the PSU and the relevant ASPSP
     */
    Id: string;

    /**
     * IBAN of the account that may be provided by the ASPSP
     */
    Iban?: string;

    /**
     * Label of the PSU account In case of a delayed debit card transaction set, the name shall specify the holder name and the imputation date 
     */
    Name: string;

    /**
     * Specifications that might be provided by the ASPSP - characteristics of the account - characteristics of the relevant card 
     */
    Details?: string;

    /**
     * Case of a set of pending card transactions, the APSP will provide the relevant cash account the card is set up on.
     */
    LinkedAccount?: string;

    /**
     * Specifies the usage of the account - PRIV: private personal account - ORGA: professional account 
     */
    Usage?: Account.UsageEnum;

    /**
     * Specifies the type of the account - CACC: Cash account 
     */
    Type: Account.TypeEnum;

    /**
     * Currency used for the account
     */
    Ccy: string;

    /**
     * list of balances provided by the ASPSP
     */
    Balances?: Array<models.Balance>;

    /**
     * Relationship between the PSU and the account - Account Holder - Co-account Holder - Attorney
     */
    PsuStatus?: string;

    Links: models.AccountLinks;

}
export namespace Account {
    export     enum UsageEnum {
        PRIV = <any> 'PRIV',
        ORGA = <any> 'ORGA'
    }
    export     enum TypeEnum {
        CACC = <any> 'CACC'
    }
}
