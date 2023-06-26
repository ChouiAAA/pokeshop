import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent {

  @Input() pokemonByType: Pokemon[] = []

  constructor(
    private _router: Router,
  ) {}


  ngOnInit() {
    this._router.navigate(["/nosproduits"])
  }

  onNewSearch(listByType: any){
    this.pokemonByType = listByType;

}



}
