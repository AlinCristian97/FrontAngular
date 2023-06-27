import { Component, ElementRef, ViewChild } from '@angular/core';
import { ComponentBase } from 'src/app/shared/classes/component-base';
import { Tooltip } from 'bootstrap';

@Component({
  selector: 'app-learn-tooltips',
  templateUrl: './learn-tooltips.component.html',
  styleUrls: ['./learn-tooltips.component.css']
})
export class LearnTooltipsComponent extends ComponentBase {

  @ViewChild('buttonTooltipTop') buttonTooltipTop!: ElementRef;
  @ViewChild('buttonTooltipBottom') buttonTooltipBottom!: ElementRef;
  @ViewChild('buttonTooltipRight') buttonTooltipRight!: ElementRef;
  @ViewChild('buttonTooltipLeft') buttonTooltipLeft!: ElementRef;

  ngAfterViewInit(): void {
    this.initializeTooltips();
  }

  private initializeTooltips(): void {
    new Tooltip(this.buttonTooltipTop.nativeElement);
    new Tooltip(this.buttonTooltipBottom.nativeElement);
    new Tooltip(this.buttonTooltipRight.nativeElement);
    new Tooltip(this.buttonTooltipLeft.nativeElement);
  }

  addDivBelowClicked(e: any): void {
    const element = e.target;
    const parentElement = element.parentElement;

    const newButton = document.createElement('button');
    newButton.textContent = 'Hover me!';
    newButton.classList.add('btn');
    newButton.classList.add('btn-primary');
    newButton.classList.add('my-3');
    newButton.classList.add('align-self-center');
    newButton.classList.add('col-3');
    newButton.setAttribute('data-bs-toggle', 'tooltip');
    newButton.setAttribute('data-bs-placement', 'bottom');
    newButton.setAttribute('title', 'Tooltip is working!');

    new Tooltip(newButton);

    parentElement.appendChild(newButton);
  }
}
