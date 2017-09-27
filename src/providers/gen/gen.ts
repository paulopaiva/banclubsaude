import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class GenProvider {
    private baseApiPath = "http://portalexata.com.br/banclub/app/api/apiService.php";
    constructor(public http: Http) {
    console.log('Hello GenProvider Provider');
  }

  getEstabelecimento(){
 
    let parametros = {parametros:'pegaCashBack',pagina:0};
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers, method:"POST"});
    return this.http.post(this.baseApiPath, parametros, options ).map( (res:Response) =>{return res.json()} );
  }

  getUsuario(){
    let parametros = {parametros:'pegaUsuario',pagina:0};
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers, method:"POST"});
    return this.http.post(this.baseApiPath, parametros, options ).map( (res:Response) =>{return res.json()} );
  }
   

}