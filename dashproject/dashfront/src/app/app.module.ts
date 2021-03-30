import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeteoComponent } from './components/meteo/meteo.component';
import { UserboxComponent } from './components/userbox/userbox.component';
import { DropboxComponent } from './components/dropbox/dropbox.component';
import { RevunueComponent } from './components/revunue/revunue.component';
import { InfoLateralComponent } from './components/infolateral/infolateral.component';
import { InfogaucheComponent } from './components/infogauche/infogauche.component';
import { GrapheComponent } from './components/graphe/graphe.component';
import { EventsComponent } from './components/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent,
    UserboxComponent,
    DropboxComponent,
    RevunueComponent,
    InfoLateralComponent,
    InfogaucheComponent,
    GrapheComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
