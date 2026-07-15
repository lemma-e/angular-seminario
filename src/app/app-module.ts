import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Home } from './pages/home/home';
import { Classes } from './pages/classes/classes';
import { Dungeons } from './pages/dungeons/dungeons';
import { Recommender } from './pages/recommender/recommender';
import { ClassList } from './components/class-list/class-list';
import { ClassCard } from './components/class-card/class-card';
import { DungeonList } from './components/dungeon-list/dungeon-list';
import { PartyBuilder } from './components/party-builder/party-builder';
import { PartySummary } from './components/party-summary/party-summary';
// import { HttpClientModule } from '@angular/common/http'; ya no se usa en angular 22
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    Navbar,
    Footer,
    Home,
    Classes,
    Dungeons,
    Recommender,
    ClassList,
    ClassCard,
    DungeonList,
    PartyBuilder,
    PartySummary,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
