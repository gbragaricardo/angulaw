import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hearing } from '../models/hearing.model';

@Injectable({
  providedIn: 'root'
})

export class HearingService {
  private apiUrl = 'http://localhost:3000/hearings';

  constructor(private httpClient: HttpClient) { }

  getClients(): Observable<Hearing[]> {
    return this.httpClient.get<Hearing[]>(this.apiUrl);
  }
}
