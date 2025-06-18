/**
 * Узагальнені типи (generics)
 */

/***************** 1 *****************/
// function foo<T>(value: T) {
//   console.log(value);
// }

// foo<number>(5);
// foo<string>("hello");
// foo<boolean>(false);
// foo<number[]>([1, 2]);
// foo<(string | number)[]>([1, "hello"]);

// interface User {
//   username: string;
//   age: number;
// }

// foo<User>({ username: "mango", age: 5 });

/***************** 2 *****************/
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

// T = number, arr = number[], : number
getFirstElement<number>([10, 20, 30]); // 10

// T = string, arr = string[], : string
getFirstElement<string>(["Alice", "Bob"]); // "Alice"

getFirstElement<string | number>(["Alice", 5]);

/***************** 3 *****************/
function shuffle<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

const mixedNums = shuffle<number>([1, 2, 3, 4]);
const mixedWords = shuffle<string>(["apple", "banana", "cherry"]);

/***************** 4 *****************/

interface Product {
  name: string;
  price: number;
}

function max<T>(array: T[], selector: (el: T) => number): T {
  return array.reduce((prev, curr) => {
    return selector(curr) > selector(prev) ? curr : prev;
  });
}

const products: Product[] = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 800 },
];

const mostExpensive = max<Product>(products, (p) => p.price);

interface User {
  displayName: string;
  age: number;
}

const users: User[] = [
  { displayName: "Poly", age: 5 },
  { displayName: "Jacob", age: 20 },
];

const oldestUser = max<User>(users, (u) => u.age);

// → { name: "Laptop", price: 1000 }

function makeFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

makeFullName("a", "b");
makeFullName("c", "d");
makeFullName("e", "f");
