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
  public contactName: any;
  public phoneNumber: any;
  public myMessage: any;
  public mySituation: any;


  constructor(private storeService: StoreService) {
  this.contactName = localStorage.getItem('Item 1');
  this.phoneNumber = localStorage.getItem('Item 2');
  this.myMessage = localStorage.getItem('Item 3');
  this.mySituation = localStorage.getItem('Item 4');
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

  saveData() {
    console.log('some perritos', this.contactName)
    let cname = 'Item 1';
    let number = 'Item 2';
    let message = 'Item 3';
    let sos = 'Item 4';

    localStorage.setItem(cname, this.contactName);
    this.contactName = localStorage.getItem(cname);

    localStorage.setItem(number, this.phoneNumber);
    this.phoneNumber = localStorage.getItem(number);

    localStorage.setItem(message, this.myMessage);
    this.myMessage = localStorage.getItem(message);

    localStorage.setItem(sos, this.mySituation);
    this.mySituation = localStorage.getItem(sos);

  }
}
