export const orders = JSON.parse(localStorage.getItem('order')) || [];

export function addOrder(order) {
  orders.unshift(order);
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('orders' , JSON.stringify(orders));
}