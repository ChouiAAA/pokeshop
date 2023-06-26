
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MentionsPageComponent } from './mentions-page/mentions-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonModule } from './pokemon/pokemon.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { BasketModule } from './basket/basket.module';


@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    MentionsPageComponent,
    PageNotFoundComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    AppRoutingModule,
    PokemonModule,
    BasketModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
