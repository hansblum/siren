import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  addContactPerson() {
    let dummy = '<ion-item><ion-label position="stacked">Name</ion-label><ion-input></ion-input></ion-item><ion-item><ion-label position="stacked">Phone number</ion-label><ion-input></ion-input></ion-item>';
    document.getElementsByClassName('contact-person')[0].innerHTML += dummy;    
  }
}
