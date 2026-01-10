import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-connection-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './connection-card.component.html',
  styleUrls: ['./connection-card.component.scss']
})
export class ConnectionCardComponent {
  instructions = [
    'Open the case link on your device.',
    'Log in or register to join the session.',
    'Once connected, follow the prompts on screen.'
  ];
}
