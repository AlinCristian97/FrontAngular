import { Component } from '@angular/core';
import { ComponentBase } from 'src/app/shared/classes/component-base';

@Component({
  selector: 'app-testing-stuff',
  templateUrl: './testing-stuff.component.html',
  styleUrls: ['./testing-stuff.component.css']
})
export class TestingStuffComponent extends ComponentBase {

  constructor() {
    super();
  }


}
