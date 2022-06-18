import { numbers } from '../numbers.js';

import { readNumber, display } from '../lib/dom-io.js';

import { listItems } from './utils/list-items.js';

const removeNumber = () => {
  debugger;

  // read the user's number
let newNumber = readNumber("the-num")
  // remove the user's number from the array
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === newNumber) {
      numbers.splice(i, 1);
    }
    // numbers[i] === rmArray ? numbers.splice(i, 1) : 0;
  }
  //numbers.splice(newNumber, 1)
  // display the new list of numbers (use the util function!)
display("your-output", listItems(numbers))
display("secret-solution", listItems(numbers))
};

// !! fill in this blank with the correct DOM ID
document.getElementById('remove-it').addEventListener('click', removeNumber);
