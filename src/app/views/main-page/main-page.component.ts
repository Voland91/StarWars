import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterInterface } from '../../interfaces/app-api.interface';
import { MainPageService } from './main-page.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  characters$ = this.mainPageService.characters$;
  trackByName = (_index: number, item: CharacterInterface) => item.name;

  constructor(
    private readonly mainPageService: MainPageService,
    private readonly router: Router,
  ) {
  }

  viewCharacterDetails(character: CharacterInterface) {
    const cutUrl = character.url.match(/\d+/);
    const id = cutUrl?.[0];

    void this.router.navigate([id]);
  }
}
