/**
 * - Типізація масивів: тип[] та Array<тип>
 * - Підказки методів та властивостей
 * - Типізація масиву об'єктів
 */

/***************** 1 *****************/
const planets: string[] = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

const scores: number[] = [1, 2, 3, 4, 5];

console.log(planets, scores);

/***************** 2 *****************/
interface Order {
  email: string;
  total: number;
}

const orders: Order[] = [
  { email: "j.mercer@mail.com", total: 120 },
  { email: "emily.watts@mail.com", total: 85 },
  { email: "liam.smith@mail.com", total: 200 },
  { email: "sophia.jones@mail.com", total: 150 },
  { email: "noah.brown@mail.com", total: 95 },
];

console.log(scores, orders);
