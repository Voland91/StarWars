import { inject } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { map } from 'rxjs';

//I had to add this resolver to have all characters list length when the user starts the page bypassing the home page
//(e.g. start from the character details page)

export const charactersListLengthResolver = () => {
  const charactersService = inject(CharactersService);

  if (charactersService.charactersListLength) return charactersService.charactersListLength;

  return charactersService.charactersResponse$.pipe(
    map(response => response.count),
  );
};
