import { HomeComponent } from './home.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material Modules
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,

    // Angular Material Modules
    MatSlideToggleModule,
  ]
})
export class HomeModule { }
