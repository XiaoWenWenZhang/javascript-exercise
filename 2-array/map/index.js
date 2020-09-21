export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  const result = collection.map(it => String.fromCharCode(it + 96));
  return result;
}
