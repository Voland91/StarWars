import { Component } from '@angular/core';
import { CharacterDetailsService } from './character-details.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent {
  currentCharacterId = 0;
  charactersListLength = this.characterDetailsService.charactersListLength;

  character$ = this.activatedRoute.params.pipe(
    map(params => params['characterId']),
    tap(id => this.currentCharacterId = Number(id)),
    switchMap(id => this.characterDetailsService.getCharacter(id)),
  );

  constructor(
    private readonly characterDetailsService: CharacterDetailsService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
  ) {
  }

  loadPrevCharacter() {
    void this.router.navigate([this.currentCharacterId - 1]);
  }

  loadNextCharacter() {
    void this.router.navigate([this.currentCharacterId + 1]);
  }
}
