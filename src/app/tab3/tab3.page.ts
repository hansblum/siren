import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  myLocation: any;
  constructor(private geolocation: Geolocation) {
  }
  u(){
   console.log('vaca');

    this.geolocation.getCurrentPosition().then((resp) => {
      this.myLocation = resp;
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
}
