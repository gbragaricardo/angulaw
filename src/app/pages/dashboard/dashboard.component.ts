import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Assignment } from '../../models/assignment.model';
import { AssignmentService } from '../../services/assignment.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  assignments: Assignment[] = [];

  constructor(private assignmentService: AssignmentService) { }

  ngOnInit(): void {
    this.loadAssignments();
  }

  loadAssignments(): void {
    this.assignmentService.getAssignements().subscribe({
      next: (apiData) => {
        this.assignments = apiData
      },

      error: (errorParam) => {
        console.error('Error to get assignments', errorParam)
      }
    });
  }
}
