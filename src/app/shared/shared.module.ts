import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { StatsNumbersComponent } from './components/stats-numbers/stats-numbers.component';



@NgModule({
  declarations: [
    ImageSliderComponent,
    StatsNumbersComponent,
  ],
  imports: [
    CommonModule,

    // Angular Material Modules
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    ImageSliderComponent,
    StatsNumbersComponent
  ]
})
export class SharedModule { }