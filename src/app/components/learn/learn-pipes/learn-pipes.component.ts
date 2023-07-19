import { Component, OnInit } from '@angular/core';
import { ComponentBase } from 'src/app/shared/classes/component-base';

@Component({
  selector: 'app-learn-pipes',
  templateUrl: './learn-pipes.component.html',
  styleUrls: ['./learn-pipes.component.scss']
})
export class LearnPipesComponent extends ComponentBase implements OnInit {
  birthday: Date;

  constructor() {
    super();
    
    this.birthday = new Date();
  }

  ngOnInit(): void {
    this.show = false;
  }
}
