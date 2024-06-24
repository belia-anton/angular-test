import { Component, Input, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@Component({
  selector: 'app-large-notification-card',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  templateUrl: './large-notification-card.component.html',
  styleUrl: './large-notification-card.component.scss'
})
export class LargeNotificationCardComponent {
  @Input() time: string = '';
  @Input() title: string = '';
  @Input() message: string = '';
}
