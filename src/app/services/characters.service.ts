import { Injectable } from '@angular/core';
import { AppApiService } from './app-api.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  characterListLength = 0;
  charactersResponse$ = this.appApiService.getCharacters().pipe(
    tap(res => this.characterListLength = res.results.length),
  );

  constructor(
    private readonly appApiService: AppApiService,
  ) {
  }
}
