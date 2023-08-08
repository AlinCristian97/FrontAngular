import { Component } from '@angular/core';
import { Tile } from '../../models/interfaces/tile.interface';
import { Subscription } from 'rxjs';
import { BreakpointService } from 'src/app/shared/services/breakpoint.service';

@Component({
  selector: 'app-home-projects-grid',
  templateUrl: './projects-grid.component.html',
  styleUrls: ['./projects-grid.component.scss']
})
export class ProjectsGridComponent {
  public isXSmall: boolean = false;
  public isSmall: boolean = false;
  public isMedium: boolean = false;
  public isLarge: boolean = false;
  public isXLarge: boolean = false;

  tiles: Tile[] = [
    {title: 'One Lorem', imagePath: '../../../assets/images/grids/home-projects/1.jpg'},
    {title: 'Two Lorems', imagePath: '../../../assets/images/grids/home-projects/2.jpg'},
    {title: 'Three Lorems', imagePath: '../../../assets/images/grids/home-projects/3.jpg'},
    {title: 'Four Lorems', imagePath: '../../../assets/images/grids/home-projects/4.jpg'},
    {title: 'Five Lorems', imagePath: '../../../assets/images/grids/home-projects/5.jpg'},
    {title: 'Six Lorems', imagePath: '../../../assets/images/grids/home-projects/6.jpg'},
  ];


  private breakpointSubscriptions: Subscription[] = [];
  cols: number = 0;

  constructor(private breakpointService: BreakpointService) {
    this.registerBreakpointSizes();
  }

  private registerBreakpointSizes() {
    this.breakpointSubscriptions.push(
      this.breakpointService.isXSmall$.subscribe(value => { if (value) this.handleBreakpointXSmall(); }),
      this.breakpointService.isSmall$.subscribe(value => { if (value) this.handleBreakpointSmall(); }),
      this.breakpointService.isMedium$.subscribe(value => { if (value) this.handleBreakpointMedium(); }),
      this.breakpointService.isLarge$.subscribe(value => { if (value) this.handleBreakpointLarge(); }),
      this.breakpointService.isXLarge$.subscribe(value => { if (value) this.handleBreakpointXLarge(); }),
    );
  }

  private handleBreakpointXSmall() {
    console.log("handleBreakpointXSmall");
    this.cols = 1;
  }

  private handleBreakpointSmall() {
    console.log("handleBreakpointSmall");
    this.cols = 2;
  }

  private handleBreakpointMedium() {
    console.log("handleBreakpointMedium");
    this.cols = 3;
  }

  private handleBreakpointLarge() {
    console.log("handleBreakpointLarge");
    this.cols = 4;
  }

  private handleBreakpointXLarge() {
    console.log("handleBreakpointXLarge");
    this.cols = 5;
  }
  
  ngOnDestroy(): void {
    this.breakpointSubscriptions.forEach(subscription => subscription.unsubscribe());
  }
}