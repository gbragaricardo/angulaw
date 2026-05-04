import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:3000/clients';

  constructor(private httpClient: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.apiUrl);
  }
}
