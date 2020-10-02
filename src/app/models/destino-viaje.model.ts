export class DestinoViaje {
  private selected: boolean;

  constructor(public nombre: string, public url: string) {}

  isSelected(): boolean {
    return this.selected;
  }

  // tslint:disable-next-line: typedef
  setSelected(s: boolean) {
    this.selected = s;
  }
}
