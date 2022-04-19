"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShipping = getShipping;

function getShipping(items, site) {
  var shipping_price = 0;
  var shipping = null;
  var standard_shipping = site.standard_shipping; // check all shipping strategy in cart, calculate for their specific products then apply each strategy to shipping price
  // if no shipping then use standard shipping otherwise free

  return {
    shipping_price: shipping_price,
    shipping: shipping
  };
}