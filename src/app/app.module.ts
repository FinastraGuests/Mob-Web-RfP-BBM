
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Status } from '../pages/status/status';
import {RequestPaymentCard} from '../components/requestPaymemtCard';

import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FilterStatusPipe } from '../pipes/filter-status/filter-status';


@NgModule({
  declarations: [
    MyApp,
    RequestPaymentCard,
    Status,
    HomePage,
    FilterStatusPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // DatePipe,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Status,

    HomePage
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  providers: [
    StatusBar,
    SplashScreen,
    DatePipe,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
