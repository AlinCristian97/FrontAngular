import { Component } from '@angular/core';
import { Tile } from '../../models/interfaces/tile.interface';

@Component({
  selector: 'app-home-projects-grid',
  templateUrl: './projects-grid.component.html',
  styleUrls: ['./projects-grid.component.scss']
})
export class ProjectsGridComponent {
  tiles: Tile[] = [
    {text: 'One', color: 'lightblue'},
    {text: 'Two', color: 'lightgreen'},
    {text: 'Three', color: 'lightpink'},
    {text: 'Four', color: '#DDBDF1'},
  ];
}