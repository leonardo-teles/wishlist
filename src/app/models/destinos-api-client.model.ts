import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.module';
import { DestinoViaje } from './destino-viaje.model';
import { ElegidoFavoritoAction, NuevoDestinoAction } from './destinos-viajes-state.model';

@Injectable()
export class DestinosApiClient {

  constructor(private store: Store<AppState>) {}

  // tslint:disable-next-line: typedef
  add(d: DestinoViaje) {
    this.store.dispatch(new NuevoDestinoAction(d));
  }

  // tslint:disable-next-line: typedef
  elegir(d: DestinoViaje) {
    this.store.dispatch(new ElegidoFavoritoAction(d));
  }
}

