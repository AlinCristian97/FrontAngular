import { Component, DestroyRef, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ComponentBase } from 'src/app/shared/classes/component-base';
import { Tooltip } from 'bootstrap';

@Component({
  selector: 'app-learn-tooltips',
  templateUrl: './learn-tooltips.component.html',
  styleUrls: ['./learn-tooltips.component.scss']
})
export class LearnTooltipsComponent extends ComponentBase {
  @ViewChild('buttonTooltipTop') buttonTooltipTop!: ElementRef;
  @ViewChild('buttonTooltipBottom') buttonTooltipBottom!: ElementRef;
  @ViewChild('buttonTooltipRight') buttonTooltipRight!: ElementRef;
  @ViewChild('buttonTooltipLeft') buttonTooltipLeft!: ElementRef;

  @ViewChild('buttonTooltipBottom2') buttonTooltipBottom2!: ElementRef;
  @ViewChild('buttonTooltipBottom3') buttonTooltipBottom3!: ElementRef;
  @ViewChild('buttonTooltipBottom4') buttonTooltipBottom4!: ElementRef;
  @ViewChild('buttonTooltipBottom5') buttonTooltipBottom5!: ElementRef;

  constructor(private renderer: Renderer2) {
    super();
  }

  ngAfterViewInit(): void {
    this.initializeTooltips();
  }

  private initializeTooltips(): void {
    new Tooltip(this.buttonTooltipTop.nativeElement);
    new Tooltip(this.buttonTooltipBottom.nativeElement);
    new Tooltip(this.buttonTooltipRight.nativeElement);
    new Tooltip(this.buttonTooltipLeft.nativeElement);

    new Tooltip(this.buttonTooltipBottom2.nativeElement);
    new Tooltip(this.buttonTooltipBottom3.nativeElement);
    new Tooltip(this.buttonTooltipBottom4.nativeElement);
    new Tooltip(this.buttonTooltipBottom5.nativeElement);
  }

  addDivBelowClicked(e: any): void {
    const element = e.target;
    const parentElement = element.parentElement;

    const newButton = this.renderer.createElement('button');
    newButton.textContent = 'Hover me!';
    this.renderer.addClass(newButton, 'btn');
    this.renderer.addClass(newButton, 'tooltip-source');
    this.renderer.addClass(newButton, 'my-3');
    this.renderer.addClass(newButton, 'align-self-center');
    this.renderer.addClass(newButton, 'col-3');
    this.renderer.setAttribute(newButton, 'data-bs-toggle', 'tooltip');
    this.renderer.setAttribute(newButton, 'data-bs-placement', 'bottom');
    this.renderer.setAttribute(newButton, 'title', 'Tooltip is working!');

    new Tooltip(newButton);

    this.renderer.appendChild(parentElement, newButton);
  }
}
