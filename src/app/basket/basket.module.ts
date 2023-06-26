import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';
import { OnePurchaseComponent } from './one-purchase/one-purchase.component';



@NgModule({
  declarations: [
    ShoppingBasketComponent,
    OnePurchaseComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class BasketModule { }
