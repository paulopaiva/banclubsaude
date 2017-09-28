import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalLocalPage } from './modal-local';

@NgModule({
  declarations: [
    ModalLocalPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalLocalPage),
  ],
  exports: [
    ModalLocalPage
  ]
})
export class ModalLocalPageModule {}
