import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RaceComponent } from './race.component';
import { RaceHeaderComponent } from './race-header/race-header.component';
import { RaceListComponent } from './race-list/race-list.component';
import { RaceDetailComponent } from './race-detail/race-detail.component';

@NgModule({
  declarations: [
    RaceComponent,
    RaceHeaderComponent,
    RaceListComponent,
    RaceDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RaceComponent]
})
export class RaceModule { }
