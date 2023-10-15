import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CharacterDetailsComponent } from './views/character-details/character-details.component';
import { MainPageComponent } from './views/main-page/main-page.component';
import { AppNavigationComponent } from './components/navigation/app-navigation.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import {
  PlanetsDynamicDataTableComponent,
} from './views/planets-dynamic-data-table/planets-dynamic-data-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CharacterDetailsComponent,
    AppNavigationComponent,
    MainPageComponent,
    SpinnerComponent,
    PlanetsDynamicDataTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
