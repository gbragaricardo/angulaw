import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assignment } from '../models/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  private apiUrl = 'http://localhost:3000/assignments';
  
  constructor(private httpClient: HttpClient) { }

  getAssignements(): Observable<Assignment[]> {
    return this.httpClient.get<Assignment[]>(this.apiUrl);
  }
}
