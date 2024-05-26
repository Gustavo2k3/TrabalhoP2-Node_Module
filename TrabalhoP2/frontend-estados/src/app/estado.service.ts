import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Estado {
  nome: string;
}

@Injectable({
  providedIn: 'root'
})

//API
export class EstadoService {
  private apiUrl = 'http://localhost:3000/estados';

  constructor(private http: HttpClient) {}

  getEstados(): Observable<Estado[]> {
    return this.http.get<Estado[]>(this.apiUrl);
  }

  addEstado(estado: Estado): Observable<Estado> {
    return this.http.post<Estado>(this.apiUrl, estado);
  }

  deleteEstado(nome: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${nome}`);
  }
}
