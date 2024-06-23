import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {
  @Input() slides: any[] = [];

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    const splide = new Splide('.splide', {
      arrows: false,
      pagination: true,
    });

    splide.on( 'pagination:mounted', function ( data ) {
      data.list.classList.add( 'splide__pagination--custom' );

      data.items.forEach( function ( item ) {
        item.button.classList.add('splide__pagination__button--custom');
      } );
    } );

    splide.mount();
  }
}
