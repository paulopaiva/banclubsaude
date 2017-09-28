import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { LoadingController } from 'ionic-angular';




/**
 * Generated class for the ModalLocalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var google;
@IonicPage()

@Component({
    selector: 'page-modal-local',
    templateUrl: 'modal-local.html',
})
export class ModalLocalPage {
    @ViewChild('map') mapElement: ElementRef;

    public dados = {};
    public latitud: number = -3.455934;
    public longitud: number = -75.0362451;
    public mylatitud: number = -3.455934;
    public mylongitud: number = -75.0362451;


    constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {

        this.dados = navParams.data;
        this.latitud = parseFloat(navParams.get('latitude'));
        this.longitud = parseFloat(navParams.get('longitude'));

        /*
             this.geolocation.getCurrentPosition().then((resp) => {
                this.mylatitud = resp.coords.latitude;
                this.mylongitud =resp.coords.longitude;
        
             
               }).catch((error) => {
                  alert ('Erro ao pegar a sua localização, ative o localizador e tente novamete.');
              
               });
        */
    }


    goBack() {
        this.navCtrl.pop();

    }

    ionViewDidLoad() {
        this.loadMap();
    }

    loadMap() {
        let loader = this.loadingCtrl.create({
            content: "Agurade, verificando sua localização...",
            duration: 10000
          });
        
          loader.present();
        
        var options = { timeout: 10000, enableHighAccuracy: true };
        let directionsDisplay;
        let directionsService = new google.maps.DirectionsService();
        let map;
        this.geolocation.getCurrentPosition(options).then((resp) => {
            loader.dismiss();
            directionsDisplay = new google.maps.DirectionsRenderer();
            let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            let mapOptions = {
                center: latLng,
                zoom: 12,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            map = new google.maps.Map(document.getElementById('map'), mapOptions);
            directionsDisplay.setMap(map);

            let request = {
                origin: new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude),
                destination: new google.maps.LatLng(this.latitud, this.longitud),
                travelMode: google.maps.DirectionsTravelMode.DRIVING
            };

            directionsService.route(request, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {

                    let route = response.routes[0];
                    directionsDisplay.setDirections(response);
                    this.distancia = route.legs[0].distance.text;
                    document.getElementById('titulo').innerHTML = '<p style="color:black;" >' + route.legs[0].end_address + '<br>Distância: ' + route.legs[0].distance.text + '<br>Tempo Estimado: ' + route.legs[0].duration.text + '</p>';
                }
            });

        }).catch((error) => {
            loader.dismiss();
            alert('Erro ao pegar a sua localização, ative o localizador e tente novamete.');
            this.navCtrl.pop();
        });

    }

}
