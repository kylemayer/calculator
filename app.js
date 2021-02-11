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
    const solution = Number(addOne.value) + Number(addTwo.value);
    addRes.textContent = solution;
   
});

subButton.addEventListener('click', () => {
    subRes.textContent = subOne.value - subTwo.value; 
  //  subOne.value = '';
  //  subTwo.value = '';
});

multButton.addEventListener('click', () => {
    multRes.textContent = multOne.value * multTwo.value; 
  //  multOne.value = '';
  //  multTwo.value = '';
});

divButton.addEventListener('click', () => {
    divRes.textContent = divOne.value / divTwo.value; 
   // divOne.value = '';
   // divTwo.value = '';
});