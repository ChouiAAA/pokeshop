import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable()

export class PokemonsService {


  private _pokemonApiUrl = "https://pokebuildapi.fr/api/v1/pokemon"
  private _typeApiUrl = "https://pokebuildapi.fr/api/v1/types"


  constructor(
    private _httpClient: HttpClient
  ) { }

 pokemon : Pokemon | null = null;



  getPokemonList(): Observable<Pokemon[]>{
    return this._httpClient.get<Pokemon[]>(this._pokemonApiUrl).pipe(

      tap((response) => this.log(response)),

      catchError((error) => this.handleError(error, undefined))
    )
  }

 log (response: any ) {
    // console.table(response);
  }

handleError (error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }


  getPokemonById(pokedexId: number) : Observable<Pokemon | undefined> {
    return this._httpClient.get<Pokemon>(this._pokemonApiUrl+`/${pokedexId}`).pipe(

      tap((response) => this.log(response)),

      catchError((error) => this.handleError(error, undefined))
    )
  }

  getTypeList() {
    return this._httpClient.get(this._typeApiUrl).pipe(

      tap((response) => this.log(response)),

      catchError((error) => this.handleError(error, undefined))
    )
  }

  getPokemonPrice(pokemon: Pokemon | undefined | null): any{
    if(pokemon) {
    return pokemon.stats.HP*2 + pokemon.stats.attack*3 + pokemon.stats.defense
    }
  }



}

