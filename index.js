#!/usr/bin/env node

const fileUrl = require('file-url');
const OrderPrice = require('./lib/orderPrice');
const { csvParseCatalog, parseToObj } = require('./lib/parsers').parsers;

const [ ,, catalogCsv, ...ordersArr ] = process.argv;

const catalogUrl = new URL(fileUrl(catalogCsv));

OrderPrice.readFile(catalogUrl)
  .then(  catalogCsv => csvParseCatalog(catalogCsv) )
  .then(  catalogArr => parseToObj(catalogArr, ordersArr) )
  .then(  objs       => OrderPrice.processOrders(objs) )
  .then(  result     => console.log('Total: ' + result) )
  .catch( err        => console.log(err) )