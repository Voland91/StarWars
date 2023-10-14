import { Injectable } from '@angular/core';
import { map } from "rxjs";
import { AppApiService } from "../../services/app-api.service";

@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  characters$ = this.appApiService.getCharacters().pipe(
    map(data => data.results),
  );

  constructor(
    private readonly appApiService: AppApiService,
  ) { }
}
