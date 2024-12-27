import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order.model';
import { ToastService } from '../../shared/toast.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService, private toastService: ToastService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(data => {
      this.orders = data;
    });
  }

  removeOrder(order: Order) {
    this.orderService.deleteOrder(order.id).subscribe(() => {
      this.orders = this.orders.filter(o => o.id !== order.id);
      this.toastService.show(`Order for ${order.productName} removed!`);
    });
  }
}
