import { Subscription } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { PokemonsService } from '../pokemons.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})


export class PokemonListComponent implements OnInit {

  pokemonList : Pokemon[] = []

  @Input() set pokemonListByType(value: Pokemon[]) {
    this.pokemonList = value
    this.getPagedResults()
    this.getTotalPages()
  };


  pokemon: Pokemon | null = null

  pageSize = 20;
  currentPage = 1;
  totalPages!: number
  pagedResults!: Pokemon[]

  constructor(
    private _pokemonService: PokemonsService,
    private _router: Router,
  ) {}


  ngOnInit(){
    this.goToPokemonList()
  }

  goToPokemon(pokemon: Pokemon) {
    this._router.navigate(["/pokemon", pokemon.id]);
  }

  goToPokemonList(){
    this._pokemonService.getPokemonList().subscribe(pokemonList => {
      this.pokemonList = pokemonList
      this.getPagedResults()
      this.getTotalPages()
    })
  }

  goToPokemonListAphabetically(pokemonList : any){

    pokemonList.sort((a:any, b:any) => {
      if (a.slug < b.slug) {
        return -1
      } else if (a.slug > b.slug) {
        return 1 
      } else {
        return 0
      }
    })
    this.getPagedResults()
    this.getTotalPages()
  }


  goToPokemonListUnaphabetically(pokemonList : any){

    const withoutAccentList = this.convertAccent(pokemonList)

    withoutAccentList.sort((a:any, b:any) => {
      if (a.name > b.name) {
        return -1
      } else if (a.name < b.name) {
        return 1
      } else {
        return 0
      }
    })
    this.pokemonList = withoutAccentList
    this.getPagedResults()
    this.getTotalPages()

  }

  goToPokemonListById(pokemonList: any){
    pokemonList.sort((a:any, b:any) => {
      if (a.id < b.id) {
        return -1
      } else if (a.id > b.id) {
        return 1
      } else {
        return 0
      }
    })
    this.getPagedResults()
    this.getTotalPages()
  }

  convertAccent(list: any): any {

    list.forEach((element: Pokemon) =>  {
      element.name = element.name.normalize('NFKD')
      });

      return list
  }


  getPagedResults() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedResults = this.pokemonList.slice(startIndex, endIndex);
  }

  getTotalPages() {
   this.totalPages = Math.ceil(this.pokemonList.length / this.pageSize);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.getPagedResults()
    }
  }


}
