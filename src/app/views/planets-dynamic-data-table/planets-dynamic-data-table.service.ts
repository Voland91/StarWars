import { Injectable } from '@angular/core';
import { PlanetsService } from '../../services/planets.service';
@Injectable({
  providedIn: 'root',
})
export class PlanetsDynamicDataTableService {
  readonly planets$ = this.planetsService.planets$;

  constructor(
    private readonly planetsService: PlanetsService,
  ) {
  }
}
