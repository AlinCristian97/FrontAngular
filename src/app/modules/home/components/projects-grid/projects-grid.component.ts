import { Component } from '@angular/core';
import { Tile } from '../../models/interfaces/tile.interface';

@Component({
  selector: 'app-home-projects-grid',
  templateUrl: './projects-grid.component.html',
  styleUrls: ['./projects-grid.component.scss']
})
export class ProjectsGridComponent {
  tiles: Tile[] = [
    {title: 'One', imagePath: 'lightblue'},
    {title: 'Two', imagePath: 'lightgreen'},
    {title: 'Three', imagePath: 'lightpink'},
    {title: 'Four', imagePath: '#DDBDF1'},
  ];
}