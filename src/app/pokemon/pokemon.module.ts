import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsService } from './pokemons.service'
import { HttpClientModule } from '@angular/common/http';
import { OrderbyAToZPipe } from './orderby-ato-z.pipe';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoaderComponent } from './loader/loader/loader.component';


const pokemonRoutes: Routes = [
  {path: "pokemon/:id", component: PokemonDetailComponent},
  {path: "nosproduits", component: ProductsPageComponent},
];

@NgModule({
  declarations: [
    HomepageComponent,
    ProductsPageComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonCardComponent,
    SidebarComponent,
    OrderbyAToZPipe,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [
    PokemonsService
  ],
  exports: [
    RouterModule,
    SidebarComponent,

  ]
})
export class PokemonModule { }
