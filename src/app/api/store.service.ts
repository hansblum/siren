import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})

export class StoreService {

  constructor(private storage: Storage) { }

  get() {
      return this.storage.get('situations');
  }

  save(data: any) {
    return this.storage.set('situations', data);
  }
}
