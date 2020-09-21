export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  let result = 0;
  Object.values(source).map(it => (result += parseInt(it)));
  return result;
}
