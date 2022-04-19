"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatPrice = formatPrice;

function formatPrice(price) {
  if (!price || price <= 0) return 'Free';
  return '£' + price.toFixed(2);
}