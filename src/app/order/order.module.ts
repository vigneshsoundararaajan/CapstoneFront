import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { OrderListComponent } from './order-list/order-list.component';
import { OrderService } from './order.service';

const routes: Routes = [
  { path: '', component: OrderListComponent }
];

@NgModule({
  declarations: [
    OrderListComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  providers: [OrderService]
})
export class OrderModule { }
