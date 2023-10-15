import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../../interfaces/app-api.interface';
import { MainPageService } from './main-page.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  isMoreCharactersToDownload = true;
  nextPageNo: string | null = null;
  characters$ = this.mainPageService.charactersResponse$.pipe(
    tap(res => this.isMoreCharactersToDownload = !!res.next),
    tap(res => this.nextPageNo = res.next ),
    map(res => res.results),
  );

  constructor(
    private readonly mainPageService: MainPageService,
    private readonly router: Router,
  ) {
  }

  trackByName = (_index: number, item: Character) => item.name;

  viewCharacterDetails(character: Character) {
    const cutUrl = character.url.match(/\d+/);
    const id = cutUrl?.[0];

    void this.router.navigate(['details', id]);
  }

  loadMoreCharacters() {
    this.mainPageService.loadMoreCharacters();
  }
}
