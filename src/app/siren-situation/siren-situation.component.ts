import { Component, OnInit,  NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreService } from '../api/store.service';

@Component({
  selector: 'app-siren-situation',
  templateUrl: './siren-situation.component.html',
  styleUrls: ['./siren-situation.component.scss'],
})

export class SirenSituationComponent implements OnInit {
  private situations: any[];
  public situation: any;

  constructor(private storeService: StoreService) {
    this.situations = [];
  }

  ngOnInit() {
    this.storeService.save([{
      situationName: 'PERRITO PANIC',
      contactPersons: [
          {
              name: 'Scrappy Dappy Doo',
              phoneNumber: '+31629525532'
          }
      ],
      message: 'Please help Perrito, he is in danger',
      code: '07081'
      }
  ]).then(() => {
    this.storeService.get().then((situations) => {
      this.situations = situations;
      if (this.situations.length > 0 ) {
        this.situation = this.situations[0];
      }
    })
    .catch((error) => { 
      alert('dat ging niet helemaal goed' + error)
    });
  });
}
showSituation(situation: {situationName: String}){
  return situation && situation.situationName;
}

}
