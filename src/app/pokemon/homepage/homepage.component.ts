import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonsService } from '../pokemons.service';
import { map } from 'rxjs';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./homepage.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomepageComponent implements OnInit {


  cheminImageHeader: string = "../../../../Ressources/JauneVSBleu.png"


  pokemon: Pokemon | null = null

  pokemonList: Pokemon[] | undefined;
  tankiestPokemonsList!: Pokemon[] ;
  strongestPokemonsList: Pokemon[] | undefined;
  weakestPokemonsList: Pokemon[] | undefined;


  constructor(
    private _pokemonService: PokemonsService,
    private _router: Router,
    config: NgbCarouselConfig
  ){
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.wrap = true;
    config.showNavigationIndicators = false;
  }


  ngOnInit() {

    this.goToStrongestPokemonsList()
    this.goToWeakestPokemonsList()
    this.goToTankiestPokemonsList()

  }

  goToTankiestPokemonsList() {
    this._pokemonService.getPokemonList().pipe(
      map(pokemon => pokemon.sort((a, b) => b.stats.defense - a.stats.defense)),
      map(pokemon => pokemon.slice(0, 9))
    ).subscribe(tankiestPokemonsList => this.tankiestPokemonsList = tankiestPokemonsList)
  }

  goToStrongestPokemonsList() {
    this._pokemonService.getPokemonList().pipe(
      map(pokemon => pokemon.sort((a, b) => b.stats.attack - a.stats.attack)),
      map(pokemon => pokemon.slice(0, 9))
    ).subscribe(strongestPokemonsList => this.strongestPokemonsList = strongestPokemonsList)
  }

  goToWeakestPokemonsList() {
    this._pokemonService.getPokemonList().pipe(
      map(pokemon => pokemon.sort((a, b) => a.stats.attack - b.stats.attack)),
      map(pokemon => pokemon.slice(0, 9))
    ).subscribe(weakestPokemonsList => this.weakestPokemonsList = weakestPokemonsList)
  }

  goToPokemon(pokemon: Pokemon | null) {
    if(pokemon){
      this._router.navigate(["/pokemon", pokemon.id]);
    }
  }

}


