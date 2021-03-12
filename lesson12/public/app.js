"use strict";
//classes 
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c,
            this.details = d,
            this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var inOne = new Invoice("mario", "work on the mario website", 300);
var inTwo = new Invoice("luigi", "work on the luigi website", 500);
console.log(inOne, inTwo);
var invoices = [];
invoices.push(inOne);
invoices.push(inTwo);
console.log(invoices);
inOne.client = "yoshi";
inTwo.amount = 1000;
console.log(inOne);
console.log(inTwo);
var form = document.querySelector('.new-item-form');
console.log(form.children);
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
console.log(form.children);
console.log("tofrom: " + tofrom);
console.log("details: " + details);
console.log("amount: " + amount);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
