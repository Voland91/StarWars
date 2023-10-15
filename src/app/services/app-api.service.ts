import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character, Characters, Planets } from '../interfaces/app-api.interface';

const appBaseUri = 'https://swapi.dev/api';

@Injectable({
  providedIn: 'root',
})
export class AppApiService {

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  getCharacters(url: string | null): Observable<Characters> {
    return this.httpClient.get<Characters>(url ?? `${appBaseUri}/people`);
  }

  getCharacter(id: string): Observable<Character> {
    return this.httpClient.get<Character>(`${appBaseUri}/people/${id}`);
  }

  getFirstTenPlanets(): Observable<Planets> {
    return this.httpClient.get<Planets>(`${appBaseUri}/planets`);
  }

  getSecondTenPlanets(): Observable<Planets> {
    return this.httpClient.get<Planets>(`${appBaseUri}/planets/?page=2`);
  }
}
