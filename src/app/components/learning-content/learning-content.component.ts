import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-learning-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learning-content.component.html',
  styleUrls: ['./learning-content.component.scss']
})
export class LearningContentComponent {
  title = 'Lemonade: Delighting Insurance Customers with AI and Behavioural Economics';
  subtitle = 'A Disruptive InsurTech Business Model for Outstanding Customer Experience and Cost-Effective Service Excellence';
  authors = 'By Laura Heely, Ziv Carmon, Wolfgang Ulaga';
}
