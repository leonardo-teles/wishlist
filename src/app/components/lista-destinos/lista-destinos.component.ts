import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.module';
import { DestinoViaje } from './../../models/destino-viaje.model';
import { DestinosApiClient } from './../../models/destinos-api-client.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  updates: string[];
  all;

  constructor(public destinosApiClient: DestinosApiClient, private store: Store<AppState>){
    this.onItemAdded = new EventEmitter();
    this.updates = [];

    // tslint:disable-next-line: no-shadowed-variable
    this.store.select(state => state.destinos.favorito)
      .subscribe(d => {
        if ( d != null ){
          this.updates.push('Se ha elegido a ' + d.nombre);
        }
      });
    // tslint:disable-next-line: no-shadowed-variable
    store.select(state => state.destinos.items).subscribe(items => this.all = items);
  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  agregado(d: DestinoViaje){
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
  }

  // tslint:disable-next-line: typedef
  elegido(e: DestinoViaje){
    this.destinosApiClient.elegir(e);
  }

  // tslint:disable-next-line: typedef
  getAll(){
  }
}

