import { Orderer } from './orderer';
import { Order } from './order';

export class Customer implements Orderer {
  orders: Order[];

  constructor(
    public firstname: string,
    public lastname: string) {
      this.orders = [];
     }

  get fullName() {
    return `${this.firstname} ${this.lastname}`;
  }

  add(order: Order|Order[]) {
    if (order instanceof Array) {
       // const orders = [order, order, ...]
      // ...[order, order, oder]
      // order, order, order
      this.orders = [...this.orders, ...order];
      return;
    }
    this.orders.push(order);
  }

  allOrders(): Order[] {
    return this.orders;
  }

  completedOrders(): Order[] {
    return this
      .orders
      .filter(o => o.completed);
  }
}