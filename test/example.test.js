// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { divi } from '../utilities.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 15;
    const y = 3;
    const quotient = 5;

    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = divi(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal (result, quotient);
});
