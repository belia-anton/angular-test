import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import 'flex-layout-system';

@Component({
  selector: 'app-card',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

}
