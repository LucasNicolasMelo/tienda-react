import products from "./products.js";

export async function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
}

export async function getItemData(itemID) {
  const item = products.find(p => p.id === Number(itemID));
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (item) resolve(item);
      else reject(new Error("Producto no encontrado"));
    }, 500);
  });
}

export async function getCategoryData(categoryID) {
  const filtered = products.filter(p => p.category === categoryID);
  return new Promise((resolve) => {
    setTimeout(() => resolve(filtered), 500);
  });
}

export async function createBuyOrder(buyOrderData) {
  console.log("Compra realizada:", buyOrderData);
  alert(`Gracias por tu compra! Tu ticket id simulado es: ${Math.floor(Math.random()*10000)}`);
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: Math.floor(Math.random()*10000), ...buyOrderData }), 500);
  });
}
