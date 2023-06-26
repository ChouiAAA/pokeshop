export class Purchase{


  name: string;
  id: number;
  image: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;

    constructor(
      name:string,
      id:number,
      image:string,
      quantity:number,
      unitPrice:number,
      totalPrice:number,
    ){
      this.name = name;
      this.id = id;
      this.image = image;
      this.quantity = quantity;
      this.unitPrice = unitPrice;
      this.totalPrice = quantity * unitPrice;
    }

  }
