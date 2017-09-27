import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FeedPage } from "../feed/feed";
import { EstabelecimentoPage } from '../estabelecimento/estabelecimento';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = EstabelecimentoPage;
  tab4Root = FeedPage;

  constructor() {

  }
}
