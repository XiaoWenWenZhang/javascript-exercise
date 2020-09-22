/* eslint-disable func-names */
function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(it => it % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  return collection.filter(function(element, index, array) {
    return array.indexOf(element) === index;
  });
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
