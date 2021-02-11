// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

function add(x, y) {
    return x + y;

}


test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 3;
    const y = 4;
    const sum = 7;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, sum);
});
