import { Order } from './order';

export interface Orderer {
 add(order: Order|Order[]): void;
 allOrders(): Order[];
 completedOrders(): Order[];
}
