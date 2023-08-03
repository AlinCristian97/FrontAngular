import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageSlideInterface } from 'src/app/shared/models/interfaces/image-slide.interface';
import { BreakpointService } from 'src/app/shared/services/breakpoint.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public isXSmall: boolean = false;
  public isSmall: boolean = false;
  public isMedium: boolean = false;
  public isLarge: boolean = false;
  public isXLarge: boolean = false;

  private breakpointSubscriptions: Subscription[] = [];

  //TODO: Check if you can isolate it or include it in an easier way
  constructor(private breakpointService: BreakpointService) {
    this.breakpointSubscriptions.push(
      this.breakpointService.isXSmall$.subscribe(value => (this.isXSmall = value)),
      this.breakpointService.isSmall$.subscribe(value => (this.isSmall = value)),
      this.breakpointService.isMedium$.subscribe(value => (this.isMedium = value)),
      this.breakpointService.isLarge$.subscribe(value => (this.isLarge = value)),
      this.breakpointService.isXLarge$.subscribe(value => (this.isXLarge = value))
    );
  }

  ngOnDestroy(): void {
    this.breakpointSubscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
