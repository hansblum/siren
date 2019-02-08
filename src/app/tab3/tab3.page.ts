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


  goHome() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.myLocation = resp.coords.latitude + ',' + resp.coords.longitude;
      const homeLocation = "49.46800006494457,17.11514008755796";
      console.log(this.myLocation)
      window.location.href = "https://www.google.com/maps/dir/'" + this.myLocation + "'/'" + homeLocation + "'";
    }).catch((error) => {
      this.myLocation = error;
    });
    
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
    });
  }

}
