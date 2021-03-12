//classes 

class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c,
            this.details = d,
            this.amount = a
    }

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }

}

const inOne = new Invoice("mario", "work on the mario website", 300)
const inTwo = new Invoice("luigi", "work on the luigi website", 500)

console.log(inOne, inTwo);

let invoices: Invoice[] = [];
invoices.push(inOne);
invoices.push(inTwo);

console.log(invoices);

inOne.client = `yoshi`;
inTwo.amount = 1000

console.log(inOne);
console.log(inTwo);

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