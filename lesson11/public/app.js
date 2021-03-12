"use strict";
// const anchor = document.querySelector('a')!;
// // if (anchor) {
// //     console.log(anchor.href);
// // }
// console.log(anchor.href);
// const form = document.querySelector('form')!;
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
