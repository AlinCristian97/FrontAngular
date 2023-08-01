import { Component } from '@angular/core';
import { ImageSlideInterface } from 'src/app/shared/models/interfaces/image-slide.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  mainSliderSlides: ImageSlideInterface[] = [
    { url: '../../../assets/images/slides/1.png', title: 'plant1', actionMessage: undefined, actionLink: undefined},
    { url: '../../../assets/images/slides/2.png', title: 'plant2', actionMessage: 'Lorem ipsum!', actionLink: '#'},
    { url: '../../../assets/images/slides/3.png', title: 'plant3', actionMessage: 'Ipsum Lore Ipusm Lorem!', actionLink: '#'},
  ];

  mainSliderIntervalSlidingInitialDelayInSeconds: number = 5;
  mainSliderIntervalSlidingPeriodInSeconds: number = 3;
}
