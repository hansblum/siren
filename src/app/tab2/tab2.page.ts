import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  addContactPerson() {
    let dummy = '<ion-item><ion-label position="floating">Name</ion-label><ion-input></ion-input></ion-item><ion-item><ion-label position="floating">Phone number</ion-label><ion-input></ion-input></ion-item>\r\n';
    document.getElementsByClassName('contact-person')[0].innerHTML += dummy;    
  }
}
