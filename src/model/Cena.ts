import Caminhos from "./Caminhos";

class Cena {
  private _id: number;
  private _descricao: string;
  private _imagem: string;
  private _caminhos: Caminhos;

  constructor(
    id: number,
    descricao: string,
    imagem: string,
    caminhos: Caminhos
  ) {
    this._id = id;
    this._descricao = descricao;
    this._imagem = imagem;
    this._caminhos = caminhos;
  }

  get id(): number {
    return this._id;
  }
  get descricao(): string {
    return this._descricao;
  }
  get imagem(): string {
    return this._imagem;
  }
  get caminhos(): Caminhos {
    return this._caminhos;
  }

  set id(id: number) {
    this._id = id;
  }
  set descricao(descricao: string) {
    this._descricao = descricao;
  }
  set imagem(imagem: string) {
    this._imagem = imagem;
  }
  set caminhos(caminhos: Caminhos) {
    this._caminhos = caminhos;
  }
}
export default Cena;
