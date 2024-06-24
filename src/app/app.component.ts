import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import 'flex-layout-system';
import { CounterCardComponent } from './counter-card/counter-card.component';
import { CardComponent } from './card/card.component';
import { SliderModule } from './slider/slider.module';
import { ButtonModule } from './button/button.module';
import { AvatarModule } from './avatar/avatar.module';
import { NotificationCardComponent } from './notification-card/notification-card.component';
import { LargeNotificationCardComponent } from './large-notification-card/large-notification-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CounterCardComponent,
    CardComponent,
    SliderModule,
    ButtonModule,
    AvatarModule,
    NotificationCardComponent,
    LargeNotificationCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'angular-test';

  clearingSlides = [
    {
      image: './assets/slider1.png',
      alt: 'Slide 1',
      title: 'שירותי ניקיון זמינים בהתאמה אישית',
      description:
        'אצלנו זה פשוט, בוחרים מה רוצים לנקות ומגדירים מתי, יודעים כמה זה יעלה מראש וסוגרים עניין',
    },
    {
      image: './assets/slider2.png',
      alt: 'Slide 2',
      title: '...רצפות קירות חלונות סנפלינג',
      description:
        'לא משנה מה גודל הנכס/מקום/מתחם, אנחנו יכולים להגיע ולתת שירות נקיון מקצועי, בכל מקום וכל זמן',
    },
  ];
  currentImageUrl: string | null = 'assets/avatar.png';
  isAvatarDisabled: boolean = false;

  constructor() {}

  onPhotoUploaded(newImageUrl: string) {
    this.currentImageUrl = newImageUrl;
    console.log('New image uploaded:', newImageUrl);
  }
}
