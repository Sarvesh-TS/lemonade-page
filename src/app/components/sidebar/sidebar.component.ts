import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Chapter {
  number: number;
  title: string;
  duration: string;
  active?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  chapters: Chapter[] = [
    { number: 1, title: 'Elevator Pitch', duration: '6 min', active: true },
    { number: 2, title: 'Watercooler Scene', duration: '6 min' },
    { number: 3, title: 'Boardroom Pitches', duration: '6 min' }
  ];
}
