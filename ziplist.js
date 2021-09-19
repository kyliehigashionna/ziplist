const letterList = ['a', 'b', 'c'];
const numberList = [1, 2, 3];

function zipList(firstList, secondList) {
  const newList = [];
  let count = 0;
  let fnum = 0;
  let snum = 0;
  const length = firstList.length + secondList.length;
  while (count < length) {
    if (count % 2 === 0) {
      newList[count] = firstList[fnum];
      fnum += 1;
    } else {
      newList[count] = secondList[snum];
      snum += 1;
    }
    count += 1;
  }
  return newList;
}

console.log(zipList(letterList, numberList));

function zipListTheSimpleWay(firstList, secondList) {
  return _.flatten(_.zip(firstList, secondList));
}

console.log(zipListTheSimpleWay(letterList, numberList));
