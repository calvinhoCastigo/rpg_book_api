import Tags from "./Tags";

class ListaTags {
  private _quantidade: number;
  private _listaTags: Array<Tags>;

  constructor(quantidade: number, listaTags: Array<Tags>) {
    this._quantidade = quantidade;
    this._listaTags = listaTags;
  }

  get quatidade(): number {
    return this._quantidade;
  }
  get listaTags(): Array<Tags> {
    return this._listaTags;
  }

  set quantidade(quantidade: number) {
    this._quantidade = quantidade;
  }
  set listaTags(listaTags: Array<Tags>) {
    this._listaTags = listaTags;
  }
}
export default ListaTags;
