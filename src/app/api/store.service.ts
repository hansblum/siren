import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class StoreService {


  get() {
    return JSON.parse(localStorage.getItem('situation'));
  }

  save(data: any) {
    return localStorage.setItem('situation', JSON.stringify(data));
  }
}
