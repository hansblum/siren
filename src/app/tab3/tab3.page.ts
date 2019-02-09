import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public myLocation: any;
  public myAddress: any;
  public buttonLabel: string;
  constructor(private geolocation: Geolocation) {
    this.myAddress = localStorage.getItem('Item 1');
    this.buttonLabel = this.myAddress ? 'Change' : 'Save';
  }

  saveAddress() {
    console.log('some perritos', this.myAddress)
    let address = 'Item 1';
    localStorage.setItem(address, this.myAddress);
    this.myAddress = localStorage.getItem(address);
    this.buttonLabel = this.myAddress ? 'Change' : 'Save';

  }


  goHome() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.myLocation = resp.coords.latitude + ',' + resp.coords.longitude;
      // const homeLocation = "1401 GA bussum";
      window.location.href = "https://www.google.com/maps/dir/'" + this.myLocation + "'/'" + this.myAddress + "'";
    }).catch((error) => {
      this.myLocation = error;
    });
    
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
    });
  }

}
