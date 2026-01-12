import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LearningPageComponent } from './components/learning-page/learning-page.component';

export const routes: Routes = [
  {
    path: 'main-page',
    component: MainPageComponent
  },
  {
    path: 'learning',
    component: LearningPageComponent
  },
  {
    path: '',
    redirectTo: '/main-page',
    pathMatch: 'full'
  }
];
