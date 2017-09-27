import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GenProvider } from '../../providers/gen/gen';



/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
      GenProvider
  ]
})
export class FeedPage {

  public lista = new Array<any>();


  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      private genProvider : GenProvider
      ) {
  }

  public somaDoisNumeros(num1:number, num2:number): void{
      //alert(num1 + num2);
  }

  ionViewDidLoad() {
    
      this.genProvider.getUsuario().subscribe(
          data=>{ this.lista = data;
//                  console.log(this.lista_filmes)
                },
          err=> console.log(err)
      )
  }

}
