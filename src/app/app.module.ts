import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuickPrototypingComponent } from './components/quick-prototyping/quick-prototyping.component';
import { HttpClientModule } from '@angular/common/http';
import { LearnTooltipsComponent } from './components/learn/learn-tooltips/learn-tooltips.component';
import { ComponentsContainerComponent } from './components/components-container/components-container.component';
import { LearnPipesComponent } from './components/learn/learn-pipes/learn-pipes.component';
import { DarkBackgroundDirective } from './directives/dark-background.directive';
import { LearnDirectivesComponent } from './components/learn/learn-directives/learn-directives.component';
import { LearnDevextremeComponent } from './components/learn/learn-devextreme/learn-devextreme.component';

@NgModule({
  declarations: [
    AppComponent,
    QuickPrototypingComponent,
    LearnTooltipsComponent,
    ComponentsContainerComponent,
    LearnPipesComponent,
    DarkBackgroundDirective,
    LearnDirectivesComponent,
    LearnDevextremeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
