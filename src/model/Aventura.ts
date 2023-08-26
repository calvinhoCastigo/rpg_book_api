import Cena from "./Cena";
import ListaTags from "./ListaTags";

class Aventura {
  private _id: number;
  private _nome: string;
  private _tags: ListaTags;
  private _cenaIncial: Cena;

  constructor(
    id: number,
    nome: string,
    listaTags: ListaTags,
    cenaIncial: Cena
  ) {
    this._id = id;
    this._nome = nome;
    this._tags = listaTags;
    this._cenaIncial = cenaIncial;
  }

  get id(): number {
    return this._id;
  }
  get nome(): string {
    return this._nome;
  }
  get tags(): ListaTags {
    return this._tags;
  }
  get cenaIncial(): Cena {
    return this._cenaIncial;
  }

  set id(id: number) {
    this._id = id;
  }
  set nome(nome: string) {
    this._nome = nome;
  }
  set tags(tags: ListaTags) {
    this._tags = tags;
  }
  set cenaIncial(cenaIncial: Cena) {
    this._cenaIncial = cenaIncial;
  }
}
export default Aventura;
