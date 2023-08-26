import Cena from "./Cena";

class Caminhos {
  private _quantidade: number;
  private _cenas: Array<Cena>;

  constructor(cenas: Array<Cena>) {
    this._quantidade = cenas.length;
    this._cenas = cenas;
  }

  get quantidade(): number {
    return this._quantidade;
  }
  get cenas(): Array<Cena> {
    return this._cenas;
  }
  cena(posicao: number): Cena {
    return this._cenas[posicao];
  }

  set quantidade(quantidade: number) {
    this._quantidade = quantidade;
  }
  set cenas(cenas: Array<Cena>) {
    this._cenas = cenas;
  }
}
export default Caminhos;
