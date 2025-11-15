import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.html',
  styleUrls: ['projects.css'],
})
export class ProjectsComponent {
  
  projects = [
    {
      title: 'PACTE',
      status: 'Completed',
      statusColor: 'green',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      deadline: '15 APRIL 2024',
      members: ['A', 'B', 'C', 'D'],
      extra: 2,
      issues: 14,
    },
    {
      title: 'P2M',
      status: 'In progress',
      statusColor: 'orange',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      deadline: '15 APRIL 2025',
      members: ['X', 'Y', 'Z', 'M'],
      extra: 2,
      issues: 14,
    },
    {
      title: `Challenge d’entreprendre`,
      status: 'In progress',
      statusColor: 'orange',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      deadline: '30 APRIL 2025',
      members: ['S', 'L', 'K', 'O'],
      extra: 2,
      issues: 14,
    },
  ];
}
