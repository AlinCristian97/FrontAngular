import { Component } from '@angular/core';
import { ImageSlideInterface } from 'src/app/shared/models/interfaces/image-slide.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  slides: ImageSlideInterface[] = [
    { url: '../../../assets/images/slides/1.jpg', title: 'plant1'},
    { url: '../../../assets/images/slides/2.jpg', title: 'plant2'},
    { url: '../../../assets/images/slides/3.jpg', title: 'plant3'},
  ];
}
