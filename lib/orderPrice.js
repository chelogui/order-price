const _ = require('lodash');
const fs = require('fs');

const addTax = require('./utils').addTax;

exports.readFile = (file) => ( new Promise((resolve, reject) => {
  try {
    resolve(fs.readFileSync(file))
  } catch(err) {
    reject(err);
  }
}))

exports.processOrders = objs => {
  const { ordersObj: orders, catalogObj: catalog } = objs;
  let totalPrice = 0;

  for (order of orders) {
    const product = catalog[order['productId']];

    if (hasStock(order, product)) {
      totalPrice += (order.amount * addTax(product.price))
    } else {
      throw new Error('O produto ' + order.productId + ' está em falta no stock');
    }
  };

  return totalPrice;
};

function hasStock(order, catalogProduct) {
  if (!catalogProduct) return false;

  const hasEnough = order['amount'] <= +catalogProduct['stock'];
  const hasSome = +catalogProduct['stock'] > 0;

  if ( hasEnough ) {
    return true;
  } else if (hasSome) {
    throw new Error(`I am sorry but we have only ${catalogProduct['stock']} units of the product ${order['productId']}`)
  } else {
    console.log("I am sorry but we don't have this product in stock! ")
  };

  return false;
}

exports.calculateOrder = (catalog, orders) => {
  return [ catalog , _.chunk(orders, 2) ];
}
