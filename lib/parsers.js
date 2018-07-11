const parse = require('csv-parse'); 
const _ = require('lodash');

const csvParseCatalog = (content) => (
  new Promise((resolve, reject) => {
    parse(content, null, (err, output) => {
    if (err) { reject(err)};
      resolve(output);
    })
  })
);

const parseToObj = (catalog, orders) => {
  const catalogObj = catalog.reduce( (accumulator, current) => {
    accumulator[current[0]] = {
      stock: current[1],
      price: current[2]
    };
    return accumulator;
  }, {});

  const ordersObj = _.chunk(orders, 2).map(order => (
    {
      productId: order[0],
      amount: order[1],
    }
  ));
  return { catalogObj, ordersObj };
}

exports.parsers = { csvParseCatalog, parseToObj };