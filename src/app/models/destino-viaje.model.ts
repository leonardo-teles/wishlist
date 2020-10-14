export class DestinoViaje {

  private selected: boolean;
  public servicios: string[];

  constructor(public nombre: string, public url: string) {
    this.servicios = ['pileta', 'desayuno'];
  }

  isSelected(): boolean {
    return this.selected;
  }

  // tslint:disable-next-line: typedef
  setSelected(s: boolean) {
    this.selected = s;
  }
}
