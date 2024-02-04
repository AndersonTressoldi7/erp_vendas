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
    console.log(venda);
    return this.http.post(`${this.urlBase}/vendas/salvarVenda`, venda, {
      headers,
      observe: 'response',
    });
    }
  }