import { DestinoViaje } from './destino-viaje.model';

export class DestinosApiClient {
  destinos: DestinoViaje[];

  constructor() {
    this.destinos = [];
  }

  // tslint:disable-next-line: typedef
  add(d: DestinoViaje) {
    this.destinos.push(d);
  }

  // tslint:disable-next-line: typedef
  getAll() {
    return this.destinos;
  }
}
