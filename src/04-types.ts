/**
 * - Union
 * - Літеральні типи ( )
 */

let username: null | string = null;

username = "Jacob";
console.log(username);

/***************** 1 *****************/

type OrderStatus = "pending" | "shipped" | "delivered" | "canceled";

// "pending", "shipped", "delivered", "canceled"
let status: OrderStatus = "pending";
status = "delivered";

console.log(status);

/***************** 2 *****************/
// delivery: "drone", "courier", "pickup"
// deliveryTime: "morning", "afternoon", "evening"

type OrderDelivery = "drone" | "courier" | "pickup";

type OrderDeliveryTime = "morning" | "afternoon" | "evening";

interface Order {
  username: string;
  email: string;
  total: number;
  delivery: OrderDelivery;
  deliveryTime: OrderDeliveryTime;
}

export const order: Order = {
  username: "Jacob",
  email: "j.mercer@mail.com",
  total: 120,
  delivery: "courier",
  deliveryTime: "afternoon",
};
