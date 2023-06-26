import { Injectable } from '@angular/core';
import { Purchase } from './purchase.model';
import { Pokemon } from '../pokemon/pokemon';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  theBasket: Purchase[] =[]
  basketCounter : number = 0
  basketTotalPrice: number = 0

  private basketCounterSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private totalPriceSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);


  constructor() { }


  AddToBasket(pokemon: Pokemon){

    const findFirst = this.theBasket.find(item => item.id=== pokemon.id)

    if(findFirst){
      findFirst.quantity++
      this.calculateTotalOnePurchase(findFirst)
    } else {
      const newPurchase: Purchase = {
        name : `${pokemon.name} + 1 pokéball`,
        id : pokemon.id,
        image : pokemon.image,
        quantity : 1,
        unitPrice : pokemon.stats.HP*2 + pokemon.stats.attack*3 + pokemon.stats.defense,
        totalPrice: pokemon.stats.HP*2 + pokemon.stats.attack*3 + pokemon.stats.defense,
      }

      this.theBasket.push(newPurchase)
    }

    this.calculateTotalPrice(this.theBasket)
    this.setTotalPrice(this.basketTotalPrice)
    this.addBasketCounter()

  }


  AddpokeballsToBasket(){

    const newPurchase: Purchase = {
      name : "5 pokéballs" ,
      id: 0,
      image : "../../assets/pokeball.png",
      quantity : 1,
      unitPrice : 125,
      totalPrice: 125,
    }

    this.theBasket.push(newPurchase)
    this.calculateTotalPrice(this.theBasket)
    this.setTotalPrice(this.basketTotalPrice)
    this.addBasketCounter()

  }

  removeToBasket(purchase: Purchase){
    this.theBasket = this.theBasket.filter(item => item.name !== purchase.name)
    this.calculateTotalPrice(this.theBasket)
    this.setTotalPrice(this.basketTotalPrice)
  }

  getAllBasket(): Purchase[]{
    return this.theBasket
  }

  addBasketCounter(){
    this.basketCounter++
    this.setCounterBasket(this.basketCounter)
  }

  removeBasketCounter(){
    this.basketCounter--
    this.setCounterBasket(this.basketCounter)
  }

  getCounterBasket(): Observable<number> {
    return this.basketCounterSubject.asObservable();
  }

  setCounterBasket(value: number): void {
    this.basketCounterSubject.next(value);
  }

  calculateTotalPrice(poképanier: Purchase[]){
    this.basketTotalPrice = poképanier.map(purchase => purchase.totalPrice).reduce((acc, prix) => acc + prix, 0);
    return this.basketTotalPrice
  }

  calculateTotalOnePurchase(onePurchase:Purchase){
    onePurchase.totalPrice = onePurchase.quantity * onePurchase.unitPrice
    this.calculateTotalPrice(this.theBasket)
    this.setTotalPrice(this.basketTotalPrice)
  }

  getTotalPrice(): Observable<number> {
    return this.totalPriceSubject.asObservable();
  }

  setTotalPrice(value: number): void {
    this.totalPriceSubject.next(value);
  }



}



