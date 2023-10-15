import { Injectable } from '@angular/core';
import { AppApiService } from './app-api.service';
import { combineLatest, map, shareReplay } from 'rxjs';
import { Planet } from '../interfaces/app-api.interface';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  readonly planets$ = combineLatest([
    this.appApiService.getFirstTenPlanets(),
    this.appApiService.getSecondTenPlanets(),
  ]).pipe(
    map(([firstTenPlanets, secondTenPlanets]) => {
      const first = firstTenPlanets.results;
      const second = secondTenPlanets.results;
      const planets: Planet[] = [...first, ...second];

      return planets;
    }),
    shareReplay(1),
  );
  constructor(
    private readonly appApiService: AppApiService,
  ) { }
}
