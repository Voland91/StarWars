import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CharacterDetailsComponent } from "./views/character-details/character-details.component";
import {MainPageComponent} from "./views/main-page/main-page.component";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: ':characterId/details',
    component: CharacterDetailsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
