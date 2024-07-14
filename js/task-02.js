// Напишіть дві функції
// makeProduct(name, price, callback) - приймає ім"я та ціну товару, а також callback
// Функція створює об"єкт товару, додає йому унікальний ідентифікатор у властивість id та викликає callback,
// передаючи йому створений об"єкт
// showProduct(product)  - колбек, що приймає об"єкт продукта та виводить його у консоль

function makeProduct(name, price, callback) {
  const newProduct = { name, price, id: Date.now() };
  callback(newProduct);
}

function showProduct(product) {
  console.log(product);
}

showProduct("apple", 10, showProduct);
