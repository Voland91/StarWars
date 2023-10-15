import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterInterface, CharactersInterface } from '../interfaces/app-api.interface';

const appBaseUri = 'https://swapi.dev/api';

@Injectable({
  providedIn: 'root',
})
export class AppApiService {

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  getCharacters(url: string | null): Observable<CharactersInterface> {
    return this.httpClient.get<CharactersInterface>(url ?? 'https://swapi.dev/api/people');
  }

  getCharacter(id: string): Observable<CharacterInterface> {
    return this.httpClient.get<CharacterInterface>(`${appBaseUri}/people/${id}`);
  }
}
