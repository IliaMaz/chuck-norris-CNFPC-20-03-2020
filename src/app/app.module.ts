import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageJokesComponent } from './components/page-jokes/page-jokes.component';

//I need to teach Angular about http requests
import { HttpClientModule } from "@angular/common/http";
import { PageLangagueComponent } from './components/page-langague/page-langague.component';

@NgModule({
  declarations: [
    AppComponent,
    PageJokesComponent,
    PageLangagueComponent
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
