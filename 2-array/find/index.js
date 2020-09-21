export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  const result = collection.find(function(it) {
    return it.age > 10 && it.age <= 20;
  });
  return result.name;
}
