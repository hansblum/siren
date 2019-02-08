import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }
  get() {
      return [{
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
      ];
  }
}
