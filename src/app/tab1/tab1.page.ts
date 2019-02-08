import { Component } from '@angular/core';
import { SirenSituationComponent } from '../siren-situation/siren-situation.component';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  openForm() {
      // let currentLocation = new String(window.location);
      // let newLocation = currentLocation.replace('tab1', 'tab2');
      // window.location.href = newLocation;
  }
}
