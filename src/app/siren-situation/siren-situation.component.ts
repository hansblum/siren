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

  constructor(private storeService: StoreService,
    private geolocation: Geolocation,
    private sms: SMS,
    public alertController: AlertController) {
    this.situations = [];
  }

  ngOnInit() {
    this.storeService.get().then((situations) => {
      this.situations = situations;
      if (this.situations && this.situations.length !== 0) {
        this.situation = this.situations[0];
      }
    });
  }

  showSituation(situation: {situationName: String}){
    return situation && situation.situationName;
  }

  async presentAlert() {
    const popupMessage = await this.alertController.create({
      header: 'Siren Alert',
      subHeader: 'Message sent successfully',
      message: `${this.situation.contactPersons[0].name} is coming to save you :)`,
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
        this.sms.send(this.situation.contactPersons[0].phoneNumber,
        `${this.situation.message} 😱. The location is https://maps.google.com/?q=${resp.coords.latitude},${resp.coords.longitude}`);
      }).catch((error) => {
        this.sms.send(this.situation.contactPersons[0].phoneNumber,
        `${this.situation.message} 😱. The location is unknown`);
      });

    this.geolocation.watchPosition().subscribe((data) => {
    });
  }
}
