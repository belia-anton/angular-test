import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterCardComponent } from './counter-card/counter-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-test';
}
