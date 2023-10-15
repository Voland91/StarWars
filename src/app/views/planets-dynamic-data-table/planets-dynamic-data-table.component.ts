import { Component } from '@angular/core';
import { PlanetsDynamicDataTableService } from './planets-dynamic-data-table.service';
import { Planet } from '../../interfaces/app-api.interface';

@Component({
  selector: 'app-planets-dynamic-data-table',
  templateUrl: './planets-dynamic-data-table.component.html',
  styleUrls: ['./planets-dynamic-data-table.component.css'],
})
export class PlanetsDynamicDataTableComponent {
  readonly planets$ = this.planetsDynamicDataTableService.planets$;

  constructor(
  private readonly planetsDynamicDataTableService: PlanetsDynamicDataTableService,
  ) {
  }

  trackByName = (_index: number, item: Planet) => item.name;
}
