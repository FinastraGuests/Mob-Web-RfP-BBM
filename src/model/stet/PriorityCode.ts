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
 * ISO20022: Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction.  API: The \"HIGH\" value will be used for Instant Payments. Otherwise the \"NORM\" value must be used 
 */
    /**
    * ISO20022: Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction.  API: The \"HIGH\" value will be used for Instant Payments. Otherwise the \"NORM\" value must be used 
    */
export enum PriorityCode {
    HIGH = <any> 'HIGH',
    NORM = <any> 'NORM'
}
