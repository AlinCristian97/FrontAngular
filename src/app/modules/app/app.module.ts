import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DxDataGridModule } from 'devextreme-angular';

// My Modules
import { AppRoutingModule } from '../app-routing/app-routing.module';

// My Components
import { NavbarComponent } from './components/navbar/navbar.component';

// Angular Material Modules
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DxDataGridModule,

    // Angular Material Modules
    NoopAnimationsModule,

    // My Modules
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
