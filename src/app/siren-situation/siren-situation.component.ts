import { Component, OnInit,  NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreService } from '../api/store.service';

@Component({
  selector: 'app-siren-situation',
  templateUrl: './siren-situation.component.html',
  styleUrls: ['./siren-situation.component.scss'],
})

export class SirenSituationComponent implements OnInit {
  private situations: any[];
  private situation: any;

  constructor(private storeService: StoreService) {
    this.situations = [];
  }

  ngOnInit() {
    this.situations = this.storeService.get();
    if (this.situations.length > 0) {
      this.situation = this.situations[0];
    }
    console.log(this.situation);
  }

}
