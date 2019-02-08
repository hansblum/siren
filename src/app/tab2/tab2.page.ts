import { Component } from '@angular/core';
import { StoreService } from '../api/store.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
 private situations: any[];
  public situation: any;

  constructor(private storeService: StoreService) {
    this.situations = [];
    this.situation={};
  }


  ngOnInit() {
  
    this.storeService.get().then((situations) => {
      this.situations = situations;
      if (this.situations && this.situations.length!=0) {
        this.situation = this.situations[0];
        }
      
    });
  }
  
  showSituation(situation: {situationName: String}){
    return situation && situation.situationName;
  }

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
    const currentLocation = window.location.href;
    const newLocation = currentLocation.replace('tab2', 'tab1');
    window.location.href = newLocation;
  }

  saveInfo() {
    console.log('saved');
  }
}
