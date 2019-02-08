import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  addContactPerson() {
    const dummy = `
    <ion-item>
      <ion-label position="stacked">Name</ion-label>
      <ion-input class="input"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="stacked">Phone number</ion-label>
      <ion-input class="input"></ion-input>
    </ion-item>`;
    document.getElementsByClassName('contact-person')[0].innerHTML += dummy;    
  }

  cancelForm() {
    let currentLocation = new String(window.location);
    let newLocation = currentLocation.replace('tab2', 'tab1');
    window.location.href = newLocation;
  }

  saveInfo() {
    console.log('saved');
  }
}
