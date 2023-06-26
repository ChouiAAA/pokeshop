import { Component, OnInit } from '@angular/core';
import { Purchase } from '../purchase.model';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-one-purchase',
  templateUrl: './one-purchase.component.html',
  styleUrls: ['./one-purchase.component.scss']
})
export class OnePurchaseComponent implements OnInit{

  myBasket! : Purchase[];
  purchase!: Purchase;
  purchaseTotalPrice! :number

  noProductStyle = false;
  style1 = "line-through"
  style2 = "none"

  constructor(private _basketService: BasketService){}

  ngOnInit(){

    this.myBasket = this._basketService.getAllBasket()

  }

  onRemoveQuantity(onePurchase: Purchase){
    if(onePurchase.quantity > 0){
      onePurchase.quantity--
      this._basketService.calculateTotalOnePurchase(onePurchase)
      this._basketService.removeBasketCounter()
      if(onePurchase.quantity == 0){
        this.noProductStyle = true;
      }
    }
  }

  onAddQuantity(onePurchase: Purchase){
    onePurchase.quantity++
    this._basketService.calculateTotalOnePurchase(onePurchase)
    this._basketService.addBasketCounter()
    this.noProductStyle = false
  }

  deletePurchase(onePurchase: Purchase){
    this._basketService.removeToBasket(onePurchase)
    this._basketService.calculateTotalOnePurchase(onePurchase)
    this.myBasket = this._basketService.getAllBasket()

    for (let i= 0; i < onePurchase.quantity ; i++){
      this._basketService.removeBasketCounter()
    }

  }


}
