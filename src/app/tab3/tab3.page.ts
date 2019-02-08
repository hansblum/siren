import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(public alertController: AlertController) {}

	async presentAlert() {
	  let alert = await this.alertController.create({
	  header: 'Siren Alert',
      subHeader: 'Message sent successfully',
      message: 'Superman is coming to save you :)',
      buttons: ['OK']
    });
	 await alert.present();
	}

	openForm() {
      let currentLocation = new String(window.location);
      let newLocation = currentLocation.replace('tab3', 'tab2');
      window.location.href = newLocation;
  }

}
