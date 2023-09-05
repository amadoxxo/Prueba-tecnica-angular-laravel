import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public apiURL = 'http://127.0.0.1:8000/api/clientes/';

  constructor(private httpClient:HttpClient) { }

  getAllClientes():Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.apiURL).pipe(
      catchError(err => { throw new Error(err) })
    )
  }


  createClientes(cliente:Cliente):Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.apiURL, JSON.stringify(cliente)).pipe(
      catchError(err => { throw new Error(err) })
    )
  }
}
