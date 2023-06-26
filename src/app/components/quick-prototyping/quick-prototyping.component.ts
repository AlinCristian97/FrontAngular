import { Component } from '@angular/core';
import { ComponentBase } from 'src/app/shared/classes/component-base';

@Component({
  selector: 'app-quick-prototyping',
  templateUrl: './quick-prototyping.component.html',
  styleUrls: ['./quick-prototyping.component.css']
})
export class QuickPrototypingComponent extends ComponentBase {

  constructor() {
    super();
  }

}
