import { Component, ViewChild } from '@angular/core';
import { Platform,Tab } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Status } from '../pages/status/status';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Tab) nav: Tab;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any,name:string}>;
  show: string = 'home';

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'New Request', component: HomePage, name:'home'},
      { title: "Requests Status", component: Status,name:'status'}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page.component);
    this.show = page.name;
  }
}
