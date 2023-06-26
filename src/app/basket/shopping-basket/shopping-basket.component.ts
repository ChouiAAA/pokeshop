import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.scss']
})


export class ShoppingBasketComponent implements OnInit{


  constructor(
    private _route: Router,
    private _basketService: BasketService
  ){}

  totalPrice: number = 0
  basketValidated: boolean = false
  pokeballsAdded: boolean = false
  totalPriceSubscription!: Subscription;


  ngOnInit(){
    this.totalPriceSubscription = this._basketService.getTotalPrice().subscribe(
      (value: number) => {
        this.totalPrice = value;
      }
    )
  }

  ngOnDestroy(): void {
    this.totalPriceSubscription.unsubscribe();
  }

  goToPokemonsPage(){
   this._route.navigateByUrl("/nosproduits")
  }

  goToHomepage(){
    this._route.navigateByUrl("/accueil")
   }

  goToValidateBasket(){
    this.basketValidated = true
  }

  addFivePokeballs(){
    this.pokeballsAdded = true
    this._basketService.AddpokeballsToBasket()
  }

  updateNumber(newValue: number): void {
    this._basketService.setTotalPrice(newValue);
  }


}
