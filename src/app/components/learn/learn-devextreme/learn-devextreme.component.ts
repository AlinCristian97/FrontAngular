import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Fruit } from 'src/app/models/fruit.model';
import { FruitService } from 'src/app/services/fruit.service';
import { ComponentBase } from 'src/app/shared/classes/component-base';

@Component({
  selector: 'app-learn-devextreme',
  templateUrl: './learn-devextreme.component.html',
  styleUrls: ['./learn-devextreme.component.css']
})
export class LearnDevextremeComponent extends ComponentBase implements OnInit {
  fruits: Fruit[];

  @ViewChild('dataGrid') dataGrid!: DxDataGridComponent;

  constructor(
    private fruitService: FruitService
  ) {
    super();
    this.fruits = [];
  }

  ngOnInit(): void {
    this.getFruits();
  }

  getFruits() {
    this.fruitService.getFruits().subscribe({
      next: (r: Fruit[]) => {
        console.log(r);

        this.fruits = r;
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        console.log("getFruits completed!");
      }
   });
  }
}
