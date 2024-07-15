// Напиши клас Client, який створює об"єкт із властивостями login та email
// оголоси приватні властивості #login #email, доступ до яких зроби через геттер та сеттер login email
class Client {
  #login;
  #email;
  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }
  get email() {
    return this.#email;
  }
  set email(userEmail) {
    this.#email = userEmail;
  }
  get login() {
    return this.#login;
  }
  set login(userLogin) {
    this.#login = userLogin;
  }
}
const boby = new Client('xekkano', 'pewqwsads@mail.com');
console.log(boby.login);
boby.login = 'xrerer';
console.log(boby.login);
