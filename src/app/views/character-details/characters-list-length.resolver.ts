import { inject } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { map } from 'rxjs';

export const charactersListLengthResolver = () => {
  const charactersService = inject(CharactersService);

  if (charactersService.charactersListLength) return charactersService.charactersListLength;

  return charactersService.charactersResponse$.pipe(
    map(response => response.count),
  );
};
