import { Component } from '@angular/core';

@Component({
  selector: 'app-shared-stats-numbers',
  templateUrl: './stats-numbers.component.html',
  styleUrls: ['./stats-numbers.component.scss']
})
export class StatsNumbersComponent {
  numbers: NumberForStats[] = [
    {title: "One", value: 99},
    {title: "Two", value: 999},
    {title: "Three", value: 8000},
  ]


}

export interface NumberForStats {
  title: string;
  value: number;
}
