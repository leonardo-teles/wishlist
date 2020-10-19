import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservasApiClientService {

  constructor() { }

  // tslint:disable-next-line: typedef
  getAll() {
    return [{ id: 1, name: 'uno' }, {id: 2, name: 'dos' }];
  }
}
