import { Injectable } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

@Injectable({
  providedIn: 'root',
})
export class MainPageService {
  charactersResponse$ = this.charactersService.charactersResponse$;

  constructor(
    private readonly charactersService: CharactersService,
  ) {
  }

  loadMoreCharacters() {
    this.charactersService.loadMoreCharacters();
  }
}
