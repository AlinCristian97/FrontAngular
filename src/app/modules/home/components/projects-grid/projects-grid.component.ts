import { Component } from '@angular/core';
import { Tile } from '../../models/interfaces/tile.interface';

@Component({
  selector: 'app-home-projects-grid',
  templateUrl: './projects-grid.component.html',
  styleUrls: ['./projects-grid.component.scss']
})
export class ProjectsGridComponent {
  tiles: Tile[] = [
    {title: 'One Lorem', imagePath: '../../../assets/images/grids/home-projects/1.jpg'},
    {title: 'Two Lorems', imagePath: '../../../assets/images/grids/home-projects/2.jpg'},
    {title: 'Three Lorems', imagePath: '../../../assets/images/grids/home-projects/3.jpg'},
    {title: 'Four Lorems', imagePath: '../../../assets/images/grids/home-projects/4.jpg'},
    {title: 'Five Lorems', imagePath: '../../../assets/images/grids/home-projects/5.jpg'},
    {title: 'Six Lorems', imagePath: '../../../assets/images/grids/home-projects/6.jpg'},
  ];
}