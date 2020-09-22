export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  let result = 0;
  collection.forEach(element => {
    if (element.startsWith('粤A')) {
      result += 1;
    }
  });
  return result;
}
