import { Injectable } from '@angular/core';
import { AppApiService } from '../../services/app-api.service';
import { CharactersService } from '../../services/characters.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterDetailsService {
  charactersListLength = this.charactersService.charactersListLength;
  constructor(
    private readonly appApiService: AppApiService,
    private readonly charactersService: CharactersService,
  ) {
  }

  getCharacter(id: string) {
    return this.appApiService.getCharacter(id);
  }
}
