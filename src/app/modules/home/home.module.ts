import { HomeComponent } from './home.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material Modules
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';


import { SharedModule } from 'src/app/shared/shared.module';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { ProjectsGridComponent } from './components/projects-grid/projects-grid.component';


@NgModule({
  declarations: [
    HomeComponent,
    
    MainSliderComponent,
    ProjectsGridComponent
  ],
  imports: [
    CommonModule,

    // Angular Material Modules
    MatSlideToggleModule,
    MatButtonModule,
    MatGridListModule,

    SharedModule
  ]
})
export class HomeModule { }
