// Напишіть функцію each(array, callback), яка першим параметром приймає масив,
//     а другим - функцію, яка буде застосована до кожного елемента масиву.
//     Функція each повинна повернути новий масив, елементами якого будуть результати виклику callback
// callback повинна помножувати елементи на 2
const arrayNumber = [3, 5, 6, 34, 8, 83, 12, 34];
function ach(array, callback) {
  return array.map(callback);
}
function mult(el) {
  return el * 2;
}
console.log(ach([2, 4, 5], mult));
