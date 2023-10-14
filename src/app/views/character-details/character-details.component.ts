import { Component } from '@angular/core';
import { CharacterDetailsService } from './character-details.service';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, map, switchMap, tap } from 'rxjs';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent {
  loader = true;
  currentCharacterId = 0;
  charactersListLength = this.charactersService.characterListLength;

  character$ = this.activatedRoute.params.pipe(
    map(params => params['characterId']),
    tap(id => this.currentCharacterId = Number(id)),
    switchMap(id => this.characterDetailsService.getCharacter(id)),
    finalize(() => this.loader = false),
  );

  constructor(
    private readonly characterDetailsService: CharacterDetailsService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly charactersService: CharactersService,
  ) {
  }

  loadPrevCharacter() {
    void this.router.navigate([this.currentCharacterId - 1]);
  }

  loadNextCharacter() {
    void this.router.navigate([this.currentCharacterId + 1]);
  }
}
