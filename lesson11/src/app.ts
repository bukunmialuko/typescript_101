// const anchor = document.querySelector('a')!;

// // if (anchor) {
// //     console.log(anchor.href);
// // }

// console.log(anchor.href);

// const form = document.querySelector('form')!;

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

console.log(form.children);
console.log(`tofrom: ${tofrom}`);
console.log(`details: ${details}`);
console.log(`amount: ${amount}`);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.value,
    );
})