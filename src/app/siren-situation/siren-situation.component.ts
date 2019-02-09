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
  public situation: any;
  myLocation: any;

  constructor(private storeService: StoreService,
    private geolocation: Geolocation,
    private sms: SMS,
    public alertController: AlertController) {
  }

  ngOnInit() {
    this.situation = this.storeService.get();
  }

  showSituation(situation: {situationName: String}){
    return situation && situation.situationName;
  }

  async presentAlert() {
    const popupMessage = await this.alertController.create({
      header: 'Siren Alert',
      subHeader: 'Message sent successfully',
      message: `${this.situation.contactPerson} is coming to save you :)`,
      buttons: [{
        text: 'OK',
        cssClass: 'primary',
        handler: (r) => {
          this.sendMessage();
        }
      }, ]
    });
    await popupMessage.present();
  }

  openForm() {
      window.location.href = '/tabs/tab2';
  }

  sendMessage() {
    this.geolocation.getCurrentPosition()
      .then((resp) => {
        this.myLocation = resp.coords;
        this.sms.send(this.situation.phoneNumber,
        `${this.situation.message} 😱. The location is https://maps.google.com/?q=${resp.coords.latitude},${resp.coords.longitude}`);
      }).catch((error) => {
        this.sms.send(this.situation.phoneNumber,
        `${this.situation.message} 😱. The location is unknown`);
      });

      this.geolocation.watchPosition().subscribe((data) => {
    });
  }
}
