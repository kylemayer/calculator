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
    const sum = Number(addOne.value) + Number(addTwo.value);
    addRes.textContent = sum;
});

subButton.addEventListener('click', () => {
    const difference = Number(subOne.value) - Number(subTwo.value);
    subRes.textContent = difference;
});

multButton.addEventListener('click', () => {
    const product = Number(multOne.value) * Number(multTwo.value);
    multRes.textContent = product;
});

divButton.addEventListener('click', () => {
    const quotient = Number(divOne.value) / Number(divTwo.value);
    divRes.textContent = quotient;
  
});