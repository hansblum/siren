import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SMS } from '@ionic-native/sms/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  myLocation: any;
  constructor(private geolocation: Geolocation, private sms: SMS) {
  }
 
  sendMessage(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.myLocation = resp.coords;
      this.sms.send('0612221161', 'I am in danger!  😱 , my current latitude is ' + resp.coords.latitude + 'and longitude is ' + resp.coords.longitude);
     // resp.coords.latitude
      console.log('Error getting location', resp);
      // resp.coords.longitude
    }).catch((error) => {
      this.myLocation = error;

      console.log('Error getting location', error);
    });
    
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
     // data can be a set of coordinates, or an error (if an error occurred).
     // data.coords.latitude
     // data.coords.longitude
    });
  }
  openForm() {
      let currentLocation = new String(window.location);
      let newLocation = currentLocation.replace('tab1', 'tab2');
      window.location.href = newLocation;
  }
}
