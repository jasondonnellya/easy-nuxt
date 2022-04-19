"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCoupon = getCoupon;

var _axios = _interopRequireDefault(require("axios"));

var _format2 = require("../_format.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getCoupon(coupon, items, API_URL) {
  var _ref, data, error, coupon_data, _coupon_data$, amount, use_amount_as_percentage, free_shipping, stock, apply_individually, start, expire, products, product_categories, coupon_amount, isNow;

  return regeneratorRuntime.async(function getCoupon$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get(API_URL + '/api/coupon-codes?filters[code][$eq]=test') //add custom controller for this?
          .then(function (res) {
            return res.data;
          })["catch"](function (err) {
            console.error(err);
            return err;
          }));

        case 2:
          _ref = _context.sent;
          data = _ref.data;
          error = {
            coupon_data: {
              coupon_amount: 0
            }
          };

          if (data) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", error);

        case 7:
          coupon_data = (0, _format2._format)(data);
          _coupon_data$ = coupon_data[0], amount = _coupon_data$.amount, use_amount_as_percentage = _coupon_data$.use_amount_as_percentage, free_shipping = _coupon_data$.free_shipping, stock = _coupon_data$.stock, apply_individually = _coupon_data$.apply_individually, start = _coupon_data$.start, expire = _coupon_data$.expire, products = _coupon_data$.products, product_categories = _coupon_data$.product_categories;
          coupon_amount = 0;
          console.log(coupon_data); // compare dates

          isNow = true;

          if (isNow) {
            _context.next = 14;
            break;
          }

          return _context.abrupt("return", error);

        case 14:
          if (!(!stock || stock <= 0)) {
            _context.next = 16;
            break;
          }

          return _context.abrupt("return", error);

        case 16:
          // apply_individually or to the whole cart
          coupon_data.coupon_amount = coupon_amount;
          return _context.abrupt("return", {
            coupon_data: coupon_data
          });

        case 18:
        case "end":
          return _context.stop();
      }
    }
  });
}