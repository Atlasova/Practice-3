// Напишіть функцію savePassword(password), яка приймає пароль та повертає внутрішню функцію,
//     яка приймає рядок та повертає true, якщо рядок співпадає зі збереженим паролем,
//     та false - якщо не співпадає
function savePassword(password) {
  return userPassword => password === userPassword;
}
const cheack = savePassword('123qwer');
console.log(cheack('258re'));
console.log(cheack('123qwer'));
