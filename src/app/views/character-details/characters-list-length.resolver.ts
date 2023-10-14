import { inject } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { map } from 'rxjs';

export const charactersListLengthResolver = () => {
  const charactersService = inject(CharactersService);

  if (charactersService.characterListLength) return charactersService.characterListLength;

  return charactersService.charactersResponse$.pipe(
    map(response => response.results.length),
  );
};
