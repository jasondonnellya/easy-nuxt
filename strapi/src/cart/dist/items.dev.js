"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._items = void 0;

var _items = function _items(cartItems) {
  var items = [];
  cartItems.forEach(function (item, index) {
    var validAttribute = false;

    if (item.product_attribute_value) {
      item.product.assigned_product_attributes.forEach(function (attribute) {
        if (attribute.product_attribute_value.title === item.product_attribute_value) {
          validAttribute = true;
        }
      });
    }

    if (item.product && item.quantity > 0 && (!item.product_attribute_value || validAttribute)) {
      items.push({
        product: item.product.id,
        quantity: item.quantity,
        product_attribute_value: item.product_attribute_value
      });
    }
  });
  return items;
};

exports._items = _items;