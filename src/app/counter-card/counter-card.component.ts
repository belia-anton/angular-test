import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-counter-card',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [],
  template: `
    <flex-box center column class="counter-container">
      <flex-box center>
        <img src="../../assets/shekels.png" width="20px" alt="shekels" />
        <span class="counter-value">{{ value }}</span>
      </flex-box>
      <p class="counter-label">{{ label }}</p>
    </flex-box>
  `,
  styles: [
    `
      .counter {
        font-family: Rubik, Regular;

        &-container {
          padding: 30px 10px 10px 10px;
          border-radius: 20px;
          background-color: white;
          max-width: 140px;
        }

        &-value {
          padding-inline-start: 5px;
          font-size: 26.6px;
          font-weight: 900;
        }

        &-label {
          margin: 0;
          font-size: 16px;
        }
      }
    `,
  ],
})
export class CounterCardComponent {
  @Input() value: number = 2.223;
  @Input() label: string = '';
}
