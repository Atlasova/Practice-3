// Напишіть функцію makeCounter, яка повертає іншу функцію,
//     яка рахує та виводить у консоль кількість своїх викликів
function makeCounter() {
  let el = 0;
  return function () {
    return (el += 1);
  };
}
const count = makeCounter();
console.log(count());
console.log(count());
console.log(count());
