import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalEstabelecimentoPage } from './modal-estabelecimento';

@NgModule({
  declarations: [
    ModalEstabelecimentoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalEstabelecimentoPage),
  ],
  exports: [
    ModalEstabelecimentoPage
  ]
})
export class ModalEstabelecimentoPageModule {}
