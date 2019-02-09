import { Component, OnInit } from '@angular/core';
import { StoreService } from '../api/store.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit{
  public situation: any = {situationName: ''};
  public contactName: any;
  public phoneNumber: any;
  public myMessage: any;
  public mySituation: any;

  constructor(private storeService: StoreService) {
  }

  ngOnInit() {
      let situationFromCache = this.storeService.get()
      this.situation = situationFromCache ? situationFromCache : this.situation;
  }

  showSituation(situation: {situationName: String}) {
    return situation && situation.situationName !=='';
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
    this.storeService.save(this.situation);
  }
}
