import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DxDataGridModule } from 'devextreme-angular';

// My Modules
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HomeModule } from '../home/home.module';

// My Components
import { NavbarComponent } from './components/navbar/navbar.component';

// Angular Material Modules
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DxDataGridModule,

    // Angular Material Modules
    NoopAnimationsModule,
    MatButtonModule,
    MatMenuModule,

    // My Modules
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
