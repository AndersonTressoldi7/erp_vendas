export class Produto {
    id: number;
    nome: string;
    preco: number;
    codigo: number;
  
    constructor(id: number, name: string, preco: number, codigo: number) {
      this.id = id;
      this.nome = name;
      this.preco = preco;
      this.codigo = codigo;
    }
  }
  