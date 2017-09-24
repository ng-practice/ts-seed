import { Order } from './order';
import loops from './loops';
import { Customer } from './customer';

// loops();

const gregor = new Customer('Gregor', 'Woiwode');

// Bestellung anlegen
const xbox: Order = {
  caption: 'XBOX One',
  price: 200,
  amount: 2,
  completed: true
}

const ps4: Order = {
  caption: 'Playstation',
  price: 200,
  amount: 1,
  completed: false
}

// Bestellung hinzufügen
gregor.add([xbox, ps4]);

// erfüllte Bestellungen lesen
console.log(gregor.completedOrders());

const { firstname, lastname } = gregor;

console.log(`${firstname}, ${lastname}`);
