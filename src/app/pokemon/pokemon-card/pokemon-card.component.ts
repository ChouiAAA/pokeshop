import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonsService } from '../pokemons.service';
import { BasketService } from 'src/app/basket/basket.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})

export class PokemonCardComponent implements OnInit{

  @Input() pokemon : Pokemon | undefined | null = null;

  pokemonPrice : number | null = null

  constructor(
    private _router: Router,
    private _pokemonService : PokemonsService,
    private _basketService : BasketService,
  ) {}


  ngOnInit() {
    this.pokemonPrice = this._pokemonService.getPokemonPrice(this.pokemon)
  }

  goToPokemon(pokemon: Pokemon | null) {
    if(pokemon){
      this._router.navigate(["/pokemon", pokemon.id]);
    }
  }

  addToBasket(pokemon: Pokemon){
    this._basketService.AddToBasket(pokemon)
  }

}
