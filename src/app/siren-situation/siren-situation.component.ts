import { Component, OnInit,  NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreService } from '../api/store.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-siren-situation',
  templateUrl: './siren-situation.component.html',
  styleUrls: ['./siren-situation.component.scss'],
})

export class SirenSituationComponent implements OnInit {
  private situations: any[];
  public situation: any;
  myLocation: any;

  constructor(private storeService: StoreService, private geolocation: Geolocation, private sms: SMS, public alertController: AlertController) {
    this.situations = [];
  }

  ngOnInit() {
    this.storeService.save([{
      situationName: 'PERRITO PANIC',
      contactPersons: [
          {
              name: 'Scrappy Dappy Doo',
              phoneNumber: '+31629525532'
          }
      ],
      message: 'Please help Perrito, he is in danger',
      code: '07081'
      }
  ]).then(() => {
    this.storeService.get().then((situations) => {
      this.situations = situations;
      if (this.situations.length > 0 ) {
        this.situation = this.situations[0];
      }
    })
    .catch((error) => { 
      alert('dat ging niet helemaal goed' + error)
    });
  });
}
showSituation(situation: {situationName: String}){
  return situation && situation.situationName;
}

  

	async presentAlert() {
	  let alert = await this.alertController.create({
	  header: 'Siren Alert',
      subHeader: 'Message sent successfully',
      message: 'Superman is coming to save you :)',
      buttons: [{
        text: 'OK',
        cssClass: 'primary',
        handler: (r) => {
          this.sendMessage()
        }
      },]
    });
	 await alert.present();
	}

	openForm() {
      let currentLocation = new String(window.location);
      let newLocation = currentLocation.replace('tab3', 'tab2');
      window.location.href = newLocation;
  }

  sendMessage(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.myLocation = resp.coords;
      this.sms.send('0612221161', 'I am in danger!  😱 , help me please Nikhil https://maps.google.com/?q=' + resp.coords.latitude + ',' + resp.coords.longitude);
     // resp.coords.latitude
      console.log('Error getting location', resp);
      // resp.coords.longitude
    }).catch((error) => {
      this.myLocation = error;

      console.log('Error getting location', error);
    });
    
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
     // data can be a set of coordinates, or an error (if an error occurred).
     // data.coords.latitude
     // data.coords.longitude
    });
  }
}
