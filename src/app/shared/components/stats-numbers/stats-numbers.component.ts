import { Component, OnInit } from '@angular/core';
import { IntervalExecutorService } from '../../services/interval-executor.service';
import { Subscription, interval, subscribeOn, timer } from 'rxjs';

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

  // TODO: Make this slow-down to work without any leaks and other problems, think of how many levels of slow-down there should be, make this parameterizable from @Input
  private startCounting(): void {
    this.numbers.forEach(n => {
      let subs = new Subscription();

      subs = interval(1).subscribe(() => {
        this.incrementCurrentValue(n);

        if (n.maxValue - n.currentValue < 50) {
          subs.unsubscribe();
          subs = interval(100).subscribe(() => {
            this.incrementCurrentValue(n);

            if (n.maxValue - n.currentValue < 10) {
              subs.unsubscribe();
              subs = interval(300).subscribe(() => {
                this.incrementCurrentValue(n);
              });
            }
          });
        }
      });
    });
  }

  // private incrementCurrentValue() {
  //   this.numbers.forEach(n => {

  //   });
  // }

  private incrementCurrentValue(number: NumberForStats) {
    if (number.currentValue < number.maxValue) {
      number.currentValue++;
    }
  }
}

export interface NumberForStats {
  title: string;
  maxValue: number;
  currentValue: number;
}
