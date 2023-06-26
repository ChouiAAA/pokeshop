import { Pokemon } from '../pokemon';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../pokemons.service';
import { Types } from '../types';
import { Purchase } from 'src/app/basket/purchase.model';
import { BasketService } from 'src/app/basket/basket.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']

})
export class PokemonDetailComponent implements OnInit{

  pokemon : Pokemon| undefined | null = null;
  pokemonList: Pokemon[] | null = null
  typeList: Types[] | null = null
  pokemonPrice : number | null = null
  url : string | null = null


  constructor(
    private _route : ActivatedRoute,
    private _pokemonService : PokemonsService,
    private _basketService : BasketService,
    ) { }


  ngOnInit() {
    const pokemonId: string | null = this._route.snapshot.paramMap.get('id')

    if(pokemonId) {
      this._pokemonService.getPokemonById(+pokemonId).subscribe(pokemon => {
        this.pokemon = pokemon
        this.pokemonPrice = this._pokemonService.getPokemonPrice(this.pokemon)
      })

      this._pokemonService.getPokemonList().subscribe(pokemonList => this.pokemonList = pokemonList)
      this._pokemonService.getTypeList().subscribe(typeList => this.typeList = typeList)

    }

  }


  getHpStat(pokemon: Pokemon): any{
    if (pokemon){
      return `${pokemon.stats.HP * 100/255}%`
    }
  }

  getAttackStat(pokemon: Pokemon): any{
    if (pokemon){
      return `${pokemon.stats.HP * 100/190}%`
    }
  }

  getAttackSpecialStat(pokemon: Pokemon): any{
    if (pokemon){
      return `${pokemon.stats.HP * 100/194}%`
    }
  }

  getDefenseStat(pokemon: Pokemon): any{
    if (pokemon){
      return `${pokemon.stats.HP * 100/250}%`
    }
  }

  getDefenseSpecialStat(pokemon: Pokemon): any{
    if (pokemon){
      return `${pokemon.stats.HP * 100/250}%`
    }
  }

  getSpeedStat(pokemon: Pokemon): any{
    if (pokemon){
      return `${pokemon.stats.HP * 100/200}%`
    }
  }

  getTypeImage(typeName : string) : string | undefined {

    if (this.typeList) {

      return this.typeList.find(type => type.name === typeName)?.image

    }

    return ""

  }




  getEvolutionImage(evolutionName: string): string | undefined {

    if (this.pokemonList) {

      return this.pokemonList.find(pokemon => pokemon.name === evolutionName)?.image

    }

    return ""

  }

  addToBasket(pokemon: Pokemon){
    this._basketService.AddToBasket(pokemon)

  }


}





