import { Injectable } from '@angular/core';
import { AppApiService } from '../../services/app-api.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterDetailsService {
  constructor(
    private readonly appApiService: AppApiService,
  ) {
  }

  getCharacter(id: string) {
    return this.appApiService.getCharacter(id);
  }
}
