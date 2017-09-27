import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from "../pages/intro/intro";

import { ConfigProvider } from "../providers/config/config";
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import { FeedPage } from '../pages/feed/feed';
import { ContactPage } from '../pages/contact/contact';
import { MapaPage } from '../pages/mapa/mapa';
import { EstabelecimentoPage } from '../pages/estabelecimento/estabelecimento';

@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigProvider
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  //rootPage:any;
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;
  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    configProvider: ConfigProvider
    
  ) {
    this.pages = [
      { title: 'Home', component: TabsPage },
      { title: 'Feed', component: FeedPage },
      { title: 'Estabelecimento', component: EstabelecimentoPage },
      { title: 'Contato', component: ContactPage },
      { title: 'Mapa', component: MapaPage }
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      let config = configProvider.getConfigData();
      if(config == null){
          this.rootPage = IntroPage;
          configProvider.setConfigData(false);
      }else{
          this.rootPage = TabsPage;
      }
      
      console.log(config);

      statusBar.styleDefault();
      splashScreen.hide();
    });
    
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
