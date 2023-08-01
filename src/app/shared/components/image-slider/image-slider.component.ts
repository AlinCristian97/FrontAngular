import { Component, Input } from '@angular/core';
import { ImageSlideInterface } from '../../models/interfaces/image-slide.interface';
import { IntervalExecutorService } from '../../services/interval-executor.service';

@Component({
  selector: 'app-shared-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent {
  @Input() slides: ImageSlideInterface[] = [];
  @Input() intervalSlidingInitialDelayInSeconds: number = 10;
  @Input() intervalSlidingPeriodInSeconds: number = 10;
  private _intervalSlidingCallback: () => void = this.goToNext;

  dotsMode: boolean = false;
  currentIndex: number = 0;

  constructor(private intervalExecutorService: IntervalExecutorService) { }

  ngOnInit(): void {
    this.startIntervalSliding();
  }

  ngOnDestroy(): void {
    this.stopIntervalSliding();
  }

  private startIntervalSliding(): void {
    const intervalSlidingInitialDelayInMiliseconds: number = this.intervalSlidingInitialDelayInSeconds * 1000;
    const intervalSlidingPeriodInMiliseconds: number = this.intervalSlidingPeriodInSeconds * 1000;

    this.intervalExecutorService.start(intervalSlidingInitialDelayInMiliseconds, intervalSlidingPeriodInMiliseconds, () => this._intervalSlidingCallback());
  }

  private stopIntervalSliding(): void {
    this.intervalExecutorService.stop();
  }

  private resetIntervalSlidingPeriod(): void {
    const intervalSlidingPeriodInMiliseconds: number = this.intervalSlidingPeriodInSeconds * 1000;

    this.intervalExecutorService.resetPeriod(intervalSlidingPeriodInMiliseconds, () => this._intervalSlidingCallback());
  }

  public getCurrentSlideUrl(): string {
    return `url('${this.slides[this.currentIndex].url}')`;
  }

  public goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.currentIndex = newIndex;

    this.resetIntervalSlidingPeriod();
  }

  public goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.slides.length - 1 : this.currentIndex - 1;

    this.currentIndex = newIndex;

    this.resetIntervalSlidingPeriod();
  }

  public goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;

    this.resetIntervalSlidingPeriod();
  }
}