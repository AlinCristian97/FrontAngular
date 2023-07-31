import { Component, Input, OnInit } from '@angular/core';
import { ImageSlideInterface } from '../../models/interfaces/image-slide.interface';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-shared-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  @Input() slides: ImageSlideInterface[] = [];

  dotsMode: boolean = false;

  currentIndex: number = 0;

  autoplayIntervalInMiliseconds: number = 5000;
  private autoplayTimerSubscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  private startTimer(): void {
    this.autoplayTimerSubscription = interval(this.autoplayIntervalInMiliseconds)
      .subscribe(() => {
        this.goToNext();
      });
  }

  private stopTimer(): void {
    if (this.autoplayTimerSubscription && !this.autoplayTimerSubscription.closed) {
      this.autoplayTimerSubscription.unsubscribe();
      console.log('Logging stopped.');
    }
  }

  public getCurrentSlideUrl(): string {
    return `url('${this.slides[this.currentIndex].url}')`;
  }

  public goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.currentIndex = newIndex;
  }

  public goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.slides.length - 1 : this.currentIndex - 1;

    this.currentIndex = newIndex;
  }

  public goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
  }
}