import { Component } from '@angular/core';
import { ImageSlideInterface } from 'src/app/shared/models/interfaces/image-slide.interface';

@Component({
  selector: 'app-home-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent {
  slides: ImageSlideInterface[] = [
    { url: '../../../assets/images/slides/1.jpg', title: 'plant1', actionMessage: undefined, actionButtonText: undefined, actionButtonLink: undefined},
    { url: '../../../assets/images/slides/2.jpg', title: 'plant2', actionMessage: 'Lorem ipsum!', actionButtonText: 'Lorem ipsum go!', actionButtonLink: '#'},
    { url: '../../../assets/images/slides/3.jpg', title: 'plant3', actionMessage: 'Ipsum Lore Ipusm Lorem!', actionButtonText: 'go now!', actionButtonLink: '#'},
  ];

  intervalSlidingInitialDelayInSeconds: number = 5;
  intervalSlidingPeriodInSeconds: number = 3;
}
