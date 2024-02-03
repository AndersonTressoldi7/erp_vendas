import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venda } from 'src/app/models/venda.model';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  urlBase: string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  salvarVenda(venda: Venda, headers?: HttpHeaders) {
    return this.http.post(`${this.urlBase}/vendas/salvarVenda`, venda, { headers, responseType: 'text' })
      .subscribe(
        (htmlResponse: string) => {
          // Fazer o que for necessário com o HTML retornado
          console.log('HTML retornado:', htmlResponse);
        },
        error => {
          console.error('Erro ao salvar venda:', error);
        }
      );
      }
    }  

