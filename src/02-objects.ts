/**
 * - Типізація об'єктів
 * - Використання interface
 * - Опціональні (?) та readonly поля
 */

interface User {
  username: string;
  readonly email: string;
  isOnline: boolean;
  age?: number;
}

const jacob: User = {
  username: "Jacob",
  email: "j.mercer@mail.com",
  isOnline: false,
};

const poly: User = {
  username: "Poly",
  email: "p.makko@mail.com",
  isOnline: true,
  age: 20,
};

const mango: User = {
  username: "Mango",
  email: "mango@mail.com",
  isOnline: true,
  age: 30,
};

console.log(poly, jacob, mango);
