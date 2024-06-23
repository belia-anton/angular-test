import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-card',
  standalone: true,
  imports: [],
  template: `
    <div class="counter-container">
      <div>
        <img src="../../assets/coin.png" width="20px" alt="shekels" />
        <span class="counter-value">{{ value }}</span>
      </div>
      <span class="counter-label">{{ label }}</span>
    </div>
  `,
  styles: [
    `
      .counter {
        &-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 30px 10px 10px 10px;
          border-radius: 20px;
          background-color: white;
          max-width: 120px;
        }

        &-value {
          padding-inline-start: 5px;
          font-size: 28px;
          font-weight: 900;
        }

        &-label {
          font-size: 20px;
        }
      }
    `,
  ],
})
export class CounterCardComponent {
  @Input() value: number = 2.223;
  @Input() label: string = '';
}
