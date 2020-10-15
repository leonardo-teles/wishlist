export class DestinoViaje {
  selected: boolean;
  servicios: string[];

  constructor(public nombre: string, public u: string, public votes: number = 0) {
    this.servicios = ['pileta', 'desayuno'];
  }

  isSelected(): boolean {
    return this.selected;
  }

  // tslint:disable-next-line: typedef
  setSelected(s: boolean) {
    this.selected = s;
  }

  // tslint:disable-next-line: typedef
  voteUp() {
    this.votes++;
  }

  // tslint:disable-next-line: typedef
  voteDown() {
    this.votes--;
  }
}

