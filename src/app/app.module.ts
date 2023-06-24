import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestingStuffComponent } from './components/testing-stuff/testing-stuff.component';
import { HttpClientModule } from '@angular/common/http';
import { LearnTooltipsComponent } from './components/learn/learn-tooltips/learn-tooltips.component';
import { ComponentsContainerComponent } from './components/components-container/components-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TestingStuffComponent,
    LearnTooltipsComponent,
    ComponentsContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
