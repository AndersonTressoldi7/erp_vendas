export class Produto {
    id: number;
    nome: string;
    preco: number;
    codigo: number;
    quantidade?: number;
  
    constructor(id: number, nome: string, preco: number, codigo: number, quantidade: number) {
      this.id = id;
      this.nome = nome;
      this.preco = preco;
      this.codigo = codigo;
      this.quantidade = quantidade;
    }
  }
  