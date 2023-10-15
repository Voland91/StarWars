import { Injectable } from '@angular/core';
import { AppApiService } from './app-api.service';
import { BehaviorSubject, map, shareReplay, switchMap, tap } from 'rxjs';
import { CharacterInterface } from '../interfaces/app-api.interface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  nextPageUrl: string | null = null;
  charactersListLength: number | null = null;
  charactersList: CharacterInterface[] = [];

  loadMore$ = new BehaviorSubject(false);

  charactersResponse$ = this.loadMore$.pipe(
    switchMap(() => this.appApiService.getCharacters(this.nextPageUrl).pipe(
      tap(res => {
        this.charactersListLength = res.count;
        this.charactersList = [...this.charactersList, ...res.results];

        this.nextPageUrl = res.next;
      }),
      map((res) => {
        res.results = this.charactersList;
        return res;
      }),
      shareReplay(1),
    ),
    ),
  );

  constructor(
    private readonly appApiService: AppApiService,
  ) {
  }

  loadMoreCharacters() {
    return this.loadMore$.next(true);
  }
}
