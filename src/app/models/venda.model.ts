import { Produto } from "./produtos.model";

export class Venda {
    id?: number;
    valor: number;
    forma_pagamento: number;
    produtos: Array<Produto>;

  
    constructor(id: number, valor: number, forma_pagamento: number, produtos: Array<Produto>) {
      this.id = id;
      this.valor = valor;
      this.forma_pagamento = forma_pagamento;
      this.produtos = produtos;
    }
  }
  