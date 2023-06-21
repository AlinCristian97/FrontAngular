import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestingStuffComponent } from './components/testing-stuff/testing-stuff.component';

@NgModule({
  declarations: [
    AppComponent,
    TestingStuffComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
