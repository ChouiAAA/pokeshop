import { ContactFormComponent } from './contact-form/contact-form.component';
import { MentionsPageComponent } from './mentions-page/mentions-page.component';
import { ShoppingBasketComponent } from './basket/shopping-basket/shopping-basket.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomepageComponent } from './pokemon/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';

import { PokemonDetailComponent } from './pokemon/pokemon-detail/pokemon-detail.component';
import { ProductsPageComponent } from './pokemon/products-page/products-page.component';



const routes: Routes = [
{path:"", redirectTo: "accueil", pathMatch: "full"},
{path:"mentionslegales", component:MentionsPageComponent},
{path:"contact", component: ContactFormComponent},
{path:"accueil", component: HomepageComponent},
{path:"apropos", component: AboutPageComponent},
{path:"monpanier", component: ShoppingBasketComponent},
{path: "pokemon/:id", component: PokemonDetailComponent},
{path: "nosproduits", component: ProductsPageComponent},
{path:"**", component: PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
