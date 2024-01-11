export class Produto {
    id: number;
    nome: string;
    preco: string;
    codigo: number;
  
    constructor(id: number, name: string, preco: string, codigo: number) {
      this.id = id;
      this.nome = name;
      this.preco = preco;
      this.codigo = codigo;
    }
  }
  