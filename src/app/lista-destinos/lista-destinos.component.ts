import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.module';
import { ElegidoFavoritoAction, NuevoDestinoAction } from '../models/destinos-viajes-state.model';
import { DestinoViaje } from './../models/destino-viaje.model';
import { DestinosApiClient } from './../models/destinos-api-client.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  updates: string[];

  constructor(public destinosApiClient: DestinosApiClient, private store: Store<AppState>) {
    this.onItemAdded = new EventEmitter();
    this.updates = [];

    this.store.select(state => state.destinos.favorito).subscribe(d => {
      if (d != null) {
        this.updates.push('Se ha elegido a ' + d.nombre);
      }
    });
  }

  ngOnInit(): void {
  }

 // tslint:disable-next-line: typedef
 agregado(d: DestinoViaje) {
   this.destinosApiClient.add(d);
   this.onItemAdded.emit(d);
   // this.store.dispatch(new NuevoDestinoAction(d));
 }

 // tslint:disable-next-line: typedef
 elegido(e: DestinoViaje) {
    this.destinosApiClient.elegir(e);
    // this.store.dispatch(new ElegidoFavoritoAction(e));
  }

}

