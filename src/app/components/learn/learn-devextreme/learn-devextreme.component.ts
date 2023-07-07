import { Component } from '@angular/core';
import { Fruit } from 'src/app/models/fruit.model';
import { ComponentBase } from 'src/app/shared/classes/component-base';

@Component({
  selector: 'app-learn-devextreme',
  templateUrl: './learn-devextreme.component.html',
  styleUrls: ['./learn-devextreme.component.css']
})
export class LearnDevextremeComponent extends ComponentBase {
  fruits: Fruit[] = [];

  constructor() {
    super();

    this.getFruits();
  }

  getFruits() {
    const apple: Fruit = new Fruit();
    apple.name = "apple";
    apple.color = "red";
    apple.healthScore = 10;

    const banana: Fruit = new Fruit();
    banana.name = "banana";
    banana.color = "yellow";
    banana.healthScore = 9;

    const watermelon: Fruit = new Fruit();
    watermelon.name = "watermelon";
    watermelon.color = "green";
    watermelon.healthScore = 10;

    this.fruits.push(apple);
    this.fruits.push(banana);
    this.fruits.push(watermelon);
  }
}
