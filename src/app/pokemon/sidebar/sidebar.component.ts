
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonsService } from '../pokemons.service';
import { PokemonType } from '../type';
import { map } from 'rxjs/operators';
import { Pokemon } from '../pokemon';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent implements OnInit{


  @Output() searchByType = new EventEmitter<Pokemon[]>()

  searchTerm!: string;
  pokemons$: Observable<Pokemon[]> | undefined ;
  pokemonList: Pokemon[] = []
  pokemonListByType : Pokemon[] = []
  pokemon!: Pokemon
  typeList: PokemonType[] = [];

  currentTypeSelected!: string | undefined


  constructor(
    private _router: Router,
    private _pokemonService: PokemonsService,
    ) {}



  ngOnInit(): void {

    this._pokemonService.getTypeList().subscribe(typeList => this.typeList = typeList)

    this.pokemons$ = this._pokemonService.getPokemonList()

    this.pokemons$.subscribe(poks => this.pokemonList = poks)

  }

  goToDetail(pokemon: Pokemon){
    const link = ["/pokemon", pokemon.id];
    this._router.navigate(link);
  }

  sortingByType(typeName : string) {

    if (this.currentTypeSelected === typeName) {

      this.currentTypeSelected = undefined;

      this.pokemons$?.subscribe(x => this.sendPokemonList(x))

    } else {

      this.currentTypeSelected = typeName;

      this.pokemons$?.pipe(
        map((pokemons) => pokemons.filter((pokemon) => pokemon.apiTypes.some((type) => type.name === typeName)))
        ).subscribe(x => this.sendPokemonList(x))

    }

  }

  sendPokemonList(poks: Pokemon[]){
    this.pokemonList = poks;
    console.log("sortingbyType ", this.pokemonList);
    this.searchByType.emit(this.pokemonList)
  }

  isChecked(typeName : string){
    return this.currentTypeSelected === typeName
  }


}
