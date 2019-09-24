import { Component, OnInit, Injectable, Injector, InjectionToken } from '@angular/core';
import { token } from '../../services';

@Injectable()
class Product {
  constructor(private name:string,private color:string){

  }
}

@Injectable()
class PurchaseOrder {
  private amount :number;
  constructor(private product:Product) {
  }
}

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {

  constructor() { }

  obj = { productId:2,productName:'xx手机',model:'s',type:'全面屏' };
  date:Date;
  data=[1,2,3,4];
  price:number;
  ngOnInit() {
    this.date = this.minusDay(new Date(),2);

    const injector =Injector.create({
      providers:[
        {
          provide:Product,
          // useClass:Product,
          useFactory:()=>{
            return new Product('大米手机','黑色');
          },
          deps:[]
        },
        {
          provide:PurchaseOrder,
          useClass:PurchaseOrder,
          deps:[Product]
        },
        {
          provide: token,
          useValue: 'http://localhost'
        }
      ]
    });
    console.log(injector.get(Product));
    console.log(injector.get(PurchaseOrder));
    console.log(injector.get(token));
  }

  minusDay(date:Date,days:number){
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

}
