import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from "@angular/http"
import { FeedPageModule } from "../pages/feed/feed.module";
import { IntroPageModule } from "../pages/intro/intro.module";
import { MoovieProvider } from '../providers/moovie/moovie';
import { FeedPage } from "../pages/feed/feed";
import { GenProvider } from '../providers/gen/gen';
import { EstabelecimentoPageModule } from '../pages/estabelecimento/estabelecimento.module';
import { MapaPage } from '../pages/mapa/mapa';
import { ModalEstabelecimentoPage } from '../pages/modal-estabelecimento/modal-estabelecimento';
import { ModalLocalPage } from '../pages/modal-local/modal-local';
import { Geolocation } from '@ionic-native/geolocation';
import { CallNumber } from '@ionic-native/call-number';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FeedPage,
    MapaPage,
    ModalEstabelecimentoPage,
    ModalLocalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // Importando o módulo de feed
    // FeedPageModule,
    IntroPageModule,
    HttpModule,
    EstabelecimentoPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FeedPage,
    MapaPage,
    ModalEstabelecimentoPage,
    ModalLocalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GenProvider

  ]
})
export class AppModule { }
