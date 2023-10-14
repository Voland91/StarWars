import { Component } from '@angular/core';
import {CharacterDetailsService} from "./character-details.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {CharacterInterface} from "../../interfaces/app-api.interface";

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent {
  readonly currentId = this.activeRoute.snapshot.params['characterId'];

  character$: Observable<CharacterInterface> = this.characterDetailsService.getCharacter(this.currentId);

  constructor(
    private readonly characterDetailsService: CharacterDetailsService,
    private readonly activeRoute: ActivatedRoute,
  ) {}
}
