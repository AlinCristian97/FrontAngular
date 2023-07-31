import { HomeComponent } from './home.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material Modules
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,

    // Angular Material Modules
    MatSlideToggleModule,
    MatButtonModule,

    SharedModule
  ]
})
export class HomeModule { }
