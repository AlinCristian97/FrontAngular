import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { StatsNumbersComponent } from './components/stats-numbers/stats-numbers.component';
import { MatCardModule}  from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { TestimonialComponent } from './components/testimonial/testimonial.component';



@NgModule({
  declarations: [
    ImageSliderComponent,
    StatsNumbersComponent,
    TestimonialComponent,
  ],
  imports: [
    CommonModule,

    // Angular Material Modules
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [
    ImageSliderComponent,
    StatsNumbersComponent,
    TestimonialComponent
  ]
})
export class SharedModule { }