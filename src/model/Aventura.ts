import ListaTags from "./ListaTags";

class Aventura {
  private _id: number;
  private _nome: string;
  private _tags: ListaTags;

  constructor(id: number, nome: string, listaTags: ListaTags) {
    this._id = id;
    this._nome = nome;
    this._tags = listaTags;
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

  set id(id: number) {
    this._id = id;
  }
  set nome(nome: string) {
    this._nome = nome;
  }
  set tags(tags: ListaTags) {
    this._tags = tags;
  }
}
export default Aventura;
