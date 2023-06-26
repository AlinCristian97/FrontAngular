import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuickPrototypingComponent } from './components/quick-prototyping/quick-prototyping.component';
import { HttpClientModule } from '@angular/common/http';
import { LearnTooltipsComponent } from './components/learn/learn-tooltips/learn-tooltips.component';
import { ComponentsContainerComponent } from './components/components-container/components-container.component';
import { LearnPipesComponent } from './components/learn/learn-pipes/learn-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    QuickPrototypingComponent,
    LearnTooltipsComponent,
    ComponentsContainerComponent,
    LearnPipesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
