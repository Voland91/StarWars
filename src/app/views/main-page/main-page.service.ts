import { Injectable } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainPageService {
  characters$ = this.charactersService.charactersResponse$.pipe(
    map(response => response.results),
  );

  constructor(
    private readonly charactersService: CharactersService,
  ) {
  }
}
