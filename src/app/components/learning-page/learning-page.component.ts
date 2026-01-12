import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { LearningContentComponent } from '../learning-content/learning-content.component';

@Component({
  selector: 'app-learning-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent,
    LearningContentComponent
  ],
  templateUrl: './learning-page.component.html',
  styleUrl: './learning-page.component.scss'
})
export class LearningPageComponent {

}
