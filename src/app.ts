import { Invoice } from './classes/invoice.js';

const invOne = new Invoice('Mario', 'work on the game', 450);
const invTwo = new Invoice('Dave', 'work on the cartoon', 550);

console.log(invOne, invTwo);

let invoices: Invoice[] = [invOne, invTwo];

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
