import { Component, OnInit } from '@angular/core';
import { IntervalExecutorService } from '../../services/interval-executor.service';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-shared-stats-numbers',
  templateUrl: './stats-numbers.component.html',
  styleUrls: ['./stats-numbers.component.scss']
})
export class StatsNumbersComponent implements OnInit {
  numbers: NumberForStats[] = [
    {title: "One", maxValue: 9, currentValue: 0},
    {title: "Two", maxValue: 999, currentValue: 400},
    {title: "Three", maxValue: 8000, currentValue: 7000},
  ]

  constructor(private intervalExecutorService: IntervalExecutorService) { }

  ngOnInit(): void {
    this.startCounting();
  }

  private startCounting(): void {
    this.intervalExecutorService.start(0, 1, () => this.incrementCurrentValue());
  }

  private incrementCurrentValue() {
    this.numbers.forEach(n => {
      if (n.currentValue < n.maxValue) {
        n.currentValue++;
      }
    });
  }
}

export interface NumberForStats {
  title: string;
  maxValue: number;
  currentValue: number;
}
