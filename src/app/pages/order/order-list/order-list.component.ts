import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orderList:any
  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    debugger
    this.getAllOrder();
  }
  getAllOrder(){
    this.orderService.getOrder().subscribe((order:any)=>{
      this.orderList=order;
      console.log(this.orderList);
      
    },(error:any)=>{
      console.log(error);
       
    })
  }

}
