import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MoovieProvider {
  handleError: any;
  // private baseApiPath = "https://api.themoviedb.org/3";
  private baseApiPath = "http://portalexata.com.br/banclub/app/api/apiService.php";
  //private baseApiPath = "http://portalexata.com.br/banclub/app/api/api.php";
  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider 5');
  }

  getLatestMovies(){
 
    let parametros = {parametros:'pegaUsuario',pagina:0};
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers, method:"POST"});
   return this.http.post(this.baseApiPath, parametros, options ).map( (res:Response) =>{return res.json()} );
   //return this.http.get(this.baseApiPath);

  /*
    return valor;
     //let headers = new Headers({'Content-Type': 'application/json'});
     //return this.http.get(...).map(res => res.json());
    // .map(res => res.json());

    */
    //console.log(valor2);
    //let valor =this.http.get(this.baseApiPath).map(res => res.json());   
    //console.log(valor);
   // return valor2;

  }

  getApiKey(): string{

    return "sua_api_vai_aqui";

  }

}