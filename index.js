//Something wrong, but I don't know what)
const arrayWithDuplNumbers = [1, 2, 3, 1, 5, 6, 1, 2, 10, 5];

const sortedNumbers = arrayWithDuplNumbers.sort();
console.log(sortedNumbers);

findDupls = (arr) => {
  let checker = arr[0];
  const arraDupl = [];
  for (let index = 0; index < arr.length; index++) {
    if (checker === arr[index]) {
      arraDupl.push(checker);
      checker = arr[index];
    } else if (checker !== arr[index]) {
      checker = arr[index + 1];
    }
  }
  return arraDupl;
};
console.log(findDupls(sortedNumbers));
