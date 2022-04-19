"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._cartTotal = _cartTotal;
exports._generateOrderItems = _generateOrderItems;

var _formatPrice = require("./format-price.js");

var _getCoupon = require("./getCoupon.js");

var _getShipping2 = require("./getShipping.js");

var _getAttributePrice3 = require("./getAttributePrice.js");

var _getSiteSettings = require("./getSiteSettings.js");

function _cartTotal(items, format, coupon, API_URL) {
  var _ref, site, total, original_price, discounted_price, _ref2, coupon_data, _getShipping, shipping_price, shipping;

  return regeneratorRuntime.async(function _cartTotal$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _getSiteSettings.getSiteSettings)(API_URL));

        case 2:
          _ref = _context.sent;
          site = _ref.site;
          total = 0;
          original_price = 0;
          discounted_price = 0;
          _context.next = 9;
          return regeneratorRuntime.awrap((0, _getCoupon.getCoupon)(coupon, items, API_URL));

        case 9:
          _ref2 = _context.sent;
          coupon_data = _ref2.coupon_data;
          _getShipping = (0, _getShipping2.getShipping)(items, site), shipping_price = _getShipping.shipping_price, shipping = _getShipping.shipping; // need to populate data for site and coupon, maybe time to setup GraphQL?

          items.forEach(function (item) {
            var _getAttributePrice = (0, _getAttributePrice3.getAttributePrice)(item),
                attribute_price = _getAttributePrice.attribute_price,
                attribute_discount_price = _getAttributePrice.attribute_discount_price; // original price


            var o_price = attribute_price ? attribute_price : item.product.price;
            original_price += o_price * item.quantity; // discounted price

            var d_price = attribute_price ? attribute_discount_price : item.product.discount_price;
            discounted_price += d_price * item.quantity; // price

            var price = d_price ? d_price : o_price;
            total += price * item.quantity;
          });
          total -= coupon_data.coupon_amount;

          if (site.free_shipping_over && total > site.free_shipping_over_amount) {
            shipping_price = 0;
            shipping = 'Free';
          }

          return _context.abrupt("return", format ? {
            total: (0, _formatPrice.formatPrice)(total),
            original_price: (0, _formatPrice.formatPrice)(original_price),
            discounted_price: (0, _formatPrice.formatPrice)(discounted_price),
            coupon_amount: (0, _formatPrice.formatPrice)(coupon_data.coupon_amount),
            shipping: shipping,
            shipping_price: (0, _formatPrice.formatPrice)(shipping_price)
          } : {
            total: total,
            original_price: original_price,
            discounted_price: discounted_price,
            coupon_amount: coupon_data.coupon_amount,
            shipping: shipping,
            shipping_price: shipping_price
          });

        case 16:
        case "end":
          return _context.stop();
      }
    }
  });
}

function _generateOrderItems(cartItems) {
  var items = [];
  cartItems.forEach(function (item) {
    // generate order in frontend
    var _getAttributePrice2 = (0, _getAttributePrice3.getAttributePrice)(item),
        attribute_price = _getAttributePrice2.attribute_price;

    var price = attribute_price ? attribute_price : item.product.discount_price ? item.product.discount_price : item.product.price;
    items.push({
      title: item.product.title,
      quantity: item.quantity,
      total: price * item.quantity,
      individual_price: price,
      product_attribute_value: item.product_attribute_value
    });
  });
  return items;
}