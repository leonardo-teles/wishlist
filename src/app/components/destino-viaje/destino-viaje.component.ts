import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { DestinoViaje } from './../../models/destino-viaje.model';
import { AppState } from './../../app.module';
import { Store } from '@ngrx/store';
import { VoteUpAction, VoteDownAction } from './../../models/destinos-viajes-state.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css'],
  animations: [
    trigger('esFavorito', [
      state('estadoFavorito', style({
        backgroundColor: 'PaleTurquoise'
      })),
      state('estadoNoFavorito', style({
        backgroundColor: 'WhiteSmoke'
      })),
      transition('estadoNoFavorito => estadoFavorito', [
        animate('3s')
      ]),
      transition('estadoFavorito => estadoNoFavorito', [
        animate('1s')
      ]),
    ])
  ]
})

export class DestinoViajeComponent implements OnInit {
  @Input() destino: DestinoViaje;
  @Input() position: number;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClicked: EventEmitter<DestinoViaje>;

  constructor(private store: Store<AppState>) {
    this.onClicked = new EventEmitter();
   }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  ir(){
    this.onClicked.emit(this.destino);
    return false;
  }

  // tslint:disable-next-line: typedef
  voteUp(){
    this.store.dispatch(new VoteUpAction(this.destino));
    return false;
  }

  // tslint:disable-next-line: typedef
  voteDown(){
    this.store.dispatch(new VoteDownAction(this.destino));
    return false;
  }
}

