import { add, diff, mult, divi } from './utilities.js';

// grab DOM elements
const addOne = document.getElementById ('add-one');
const addTwo = document.getElementById ('add-two');

const subOne = document.getElementById ('sub-one');
const subTwo = document.getElementById ('sub-two');

const multOne = document.getElementById ('mult-one');
const multTwo = document.getElementById ('mult-two');

const divOne = document.getElementById ('div-one');
const divTwo = document.getElementById ('div-two');

const addButton = document.getElementById('addition');
const subButton = document.getElementById('subtraction');
const multButton = document.getElementById('multiply');
const divButton = document.getElementById('divide');

const addRes = document.getElementById('a-result');
const subRes = document.getElementById('s-result');
const multRes = document.getElementById('m-result');
const divRes = document.getElementById('d-result');


// set event listeners on each button, do math, and update DOM

addButton.addEventListener('click', () => {
    const x = Number(addOne.value);
    const y = Number(addTwo.value);
    const sum = add(x, y);
    addRes.textContent = sum;
});

subButton.addEventListener('click', () => {
    const x = Number(subOne.value);
    const y = Number(subTwo.value);
    const difference = diff(x, y);
    subRes.textContent = difference;
});

multButton.addEventListener('click', () => {
    const x = Number(multOne.value);
    const y = Number(multTwo.value);
    const product = mult(x, y);
    multRes.textContent = product;

});

divButton.addEventListener('click', () => {
    const x = Number(divOne.value);
    const y = Number(divTwo.value);
    const quotient = divi(x, y);
    divRes.textContent = quotient;
});