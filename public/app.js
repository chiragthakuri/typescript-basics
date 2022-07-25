import { Invoice } from './classes/invoice.js';
const invOne = new Invoice('Mario', 'work on the game', 450);
const invTwo = new Invoice('Dave', 'work on the cartoon', 550);
console.log(invOne, invTwo);
let invoices = [invOne, invTwo];
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
