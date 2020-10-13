import { BehaviorSubject, Subject } from 'rxjs';
import { DestinoViaje } from './destino-viaje.model';

export class DestinosApiClient {
  destinos: DestinoViaje[];
  current: Subject<DestinoViaje> = new BehaviorSubject<DestinoViaje>(null);

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

  /*
  getById(id: string): DestinoViaje {
    return this.destinos.filter(function(d) {return d.id.toString() === id; })[0];
  }
  */

  // tslint:disable-next-line: typedef
  elegir(d: DestinoViaje) {
    this.destinos.forEach(x => x.setSelected(false));
    d.setSelected(true);
    this.current.next(d);
  }

  subscribeOnChange(fn) {
    this.current.subscribe(fn);
  }
}
