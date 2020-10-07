import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  // destinos: DestinoViaje[];

  constructor(public destinosApiClient: DestinosApiClient) {
    // this.destinos = [];
    this.onItemAdded = new EventEmitter();
   }

  ngOnInit(): void {
  }

  /*
  guardar(nombre: string, url: string): boolean {
    this.destinos.push(new DestinoViaje(nombre, url));

    return false;
  }
  */
 // tslint:disable-next-line: typedef
 agregado(d: DestinoViaje) {
   this.destinosApiClient.add(d);
   this.onItemAdded.emit(d);
 }

  // tslint:disable-next-line: typedef
  elegido(e: DestinoViaje) {
    // this.destinos.forEach(function(x) { x.setSelected(false); });
    // d.setSelected(true);
    this.destinosApiClient.getAll().forEach(x => x.setSelected(false));
    e.setSelected(true);
  }

}
