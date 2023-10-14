import { Injectable } from '@angular/core';
import {AppApiService} from "./services/api/app-api.service";
import {map, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  characters$ = this.appApiService.getCharacters().pipe(
    map(data => data.results),
  );

  constructor(
    private readonly appApiService: AppApiService,
  ) { }
}
