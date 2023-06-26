import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket/basket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  basketCounter! : number
  basketCounterSubscription!: Subscription;

  constructor(private _basketService: BasketService){}

  ngOnInit(){
    this.basketCounterSubscription = this._basketService.getCounterBasket().subscribe(
      (value: number) => {

        this.basketCounter = value;
      }
    )


  }

  ngOnDestroy(): void {
    this.basketCounterSubscription.unsubscribe();
  }

  updateNumber(newValue: number): void {
    this._basketService.setCounterBasket(newValue);
  }



}
