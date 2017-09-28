import { Component } from '@angular/core';
import { IonicPage,ModalController, NavController, NavParams } from 'ionic-angular';
import { GenProvider } from '../../providers/gen/gen';
import { ModalEstabelecimentoPage } from '../modal-estabelecimento/modal-estabelecimento';
import { ModalLocalPage } from '../modal-local/modal-local';
import { CallNumber } from '@ionic-native/call-number';

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
    private callNumber: CallNumber, 
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private genProvider : GenProvider
    ) {
  }
  ver(dados){
  //  let modal = modal.create(ModalEstabelecimentoPage)
    let profileModal = this.modalCtrl.create(ModalEstabelecimentoPage, dados);
  //  let profileModal = this.modalCtrl.create(ModalEstabelecimentoPage);
    profileModal.present();
   

  }
  goCall(telefone) {
    console.log(telefone);
    this.callNumber.callNumber(telefone, true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => alert('Erro ao fazer a chamada.'));
    }

  local(dados){
    //  let modal = modal.create(ModalEstabelecimentoPage)
      let profileModal = this.modalCtrl.create(ModalLocalPage, dados);
    //  let profileModal = this.modalCtrl.create(ModalEstabelecimentoPage);
      profileModal.present();
     
  
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
