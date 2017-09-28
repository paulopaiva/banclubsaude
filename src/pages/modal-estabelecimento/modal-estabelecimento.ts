import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalEstabelecimentoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal-estabelecimento',
  templateUrl: 'modal-estabelecimento.html',
})
export class ModalEstabelecimentoPage {
  public dados ={};
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   // console.log('titulo', navParams.get('titulo'));
   // console.log('foto', navParams.get('foto'));
   // console.log('categoria', navParams.get('categoria'));
    this.dados=navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalEstabelecimentoPage');
  }
  goBack() {
    this.navCtrl.pop();
   
  }

}
