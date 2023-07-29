//Something wrong, but I don't know what)
"use strict";
const arrayWithDuplNumbers = [1, 2, 6, 3, 1,7, 5, 6, 1, 2, 2, 2, 2, 2, 2, 5, 7];

const sortedNumbers = arrayWithDuplNumbers.sort();
console.log(sortedNumbers);

const getDupls = (array) => {
  const dupls = [];
  for (let index = 0; index < array.length; index++) {
    if (
      array.at(index) === array.at(index + 1) &&
      dupls.includes(array.at(index)) === false
    ) {
      dupls.push(array.at(index));
    } else {
      dupls;
    }
  }
  return dupls;
};
console.log(getDupls(arrayWithDuplNumbers));

