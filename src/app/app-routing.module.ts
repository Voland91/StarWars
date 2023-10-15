import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './views/character-details/character-details.component';
import { MainPageComponent } from './views/main-page/main-page.component';
import {
  PlanetsDynamicDataTableComponent,
} from './views/planets-dynamic-data-table/planets-dynamic-data-table.component';
import { charactersListLengthResolver } from './views/character-details/characters-list-length.resolver';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'planets',
    component: PlanetsDynamicDataTableComponent,
  },
  {
    path: 'details/:characterId',
    component: CharacterDetailsComponent,
    resolve: {
      count: charactersListLengthResolver,
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
