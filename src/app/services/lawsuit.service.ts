import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lawsuit } from '../models/lawsuit.model';

@Injectable({
  providedIn: 'root'
})

export class LawsuitService {
  private apiUrl = 'http://localhost:3000/lawsuits';

  constructor(private httpClient: HttpClient) { }

  getClients(): Observable<Lawsuit[]> {
    return this.httpClient.get<Lawsuit[]>(this.apiUrl);
  }
}
