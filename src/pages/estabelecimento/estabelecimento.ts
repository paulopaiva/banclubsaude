import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GenProvider } from '../../providers/gen/gen';

/**
 * Generated class for the EstabelecimentoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-estabelecimento',
  templateUrl: 'estabelecimento.html',
  providers: [
    GenProvider
]
})
export class EstabelecimentoPage {
  public lista = new Array<any>();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private genProvider : GenProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstabelecimentoPage');
    this.genProvider.getEstabelecimento().subscribe(
      data=>{ this.lista = data;
//                  console.log(this.lista_filmes)
            },
      err=> console.log(err)
  )
  }

}
