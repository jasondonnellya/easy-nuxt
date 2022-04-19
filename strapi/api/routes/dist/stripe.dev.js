"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _axios = _interopRequireDefault(require("axios"));

var _cartTotal2 = require("../../src/cart/cart-total.js");

var _items2 = require("../../src/cart/items.js");

var _stripe = _interopRequireDefault(require("stripe"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stripe = (0, _stripe["default"])(process.env.STRIPE_SECRET_KEY);
var router = (0, _express.Router)();
router.post('/stripe', function _callee(req, res) {
  var bodyData, jwt, headers, user, _ref, total, original_price, discounted_price, coupon_amount, shipping, shipping_price, order, paymentIntent;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          bodyData = req.body.data;
          jwt = req.signedCookies.jwt;
          headers = {
            Authorization: "Bearer ".concat(jwt)
          };
          _context.next = 5;
          return regeneratorRuntime.awrap(_axios["default"].get(process.env.API_URL + '/api/users/me', {
            headers: headers
          }).then(function (res) {
            return res;
          })["catch"](function (err) {
            console.log(err);
            return null;
          }));

        case 5:
          user = _context.sent;

          if (!(!user || !user.data)) {
            _context.next = 9;
            break;
          }

          res.json(null);
          return _context.abrupt("return");

        case 9:
          if (!(user.data.cart.items.length <= 0)) {
            _context.next = 12;
            break;
          }

          res.json(null);
          return _context.abrupt("return");

        case 12:
          _context.next = 14;
          return regeneratorRuntime.awrap((0, _cartTotal2._cartTotal)(user.data.cart.items, false, bodyData.coupon, process.env.API_URL));

        case 14:
          _ref = _context.sent;
          total = _ref.total;
          original_price = _ref.original_price;
          discounted_price = _ref.discounted_price;
          coupon_amount = _ref.coupon_amount;
          shipping = _ref.shipping;
          shipping_price = _ref.shipping_price;

          if (!(total <= 0)) {
            _context.next = 24;
            break;
          }

          res.json(null);
          return _context.abrupt("return");

        case 24:
          order = {
            total: total,
            original_price: original_price,
            discounted_price: discounted_price,
            coupon_amount: coupon_amount,
            coupon: coupon_amount ? bodyData.coupon : '',
            shipping: shipping,
            shipping_price: shipping_price,
            items: (0, _cartTotal2._generateOrderItems)(user.data.cart.items),
            billing_address: bodyData.billing_address,
            delivery_address: bodyData.delivery_address,
            delivery_instructions: bodyData.delivery_instructions,
            status: 'Pending'
          }; //create customer or check if they exist?
          //create invoice and add id to payment intent
          // https://stackoverflow.com/questions/59687006/adding-products-to-a-payment-with-paymentintents-api

          _context.next = 27;
          return regeneratorRuntime.awrap(stripe.paymentIntents.create({
            amount: total * 100,
            // change to pounds
            currency: 'gbp',
            automatic_payment_methods: {
              enabled: true
            },
            receipt_email: user.data.email,
            shipping: {
              name: bodyData.delivery_address.first_name + ' ' + bodyData.delivery_address.last_name,
              phone: bodyData.delivery_address.phone,
              address: {
                city: bodyData.delivery_address.city,
                line1: bodyData.delivery_address.address1,
                line2: bodyData.delivery_address.address2,
                postal_code: bodyData.delivery_address.postcode
              }
            }
          })["catch"](function (err) {
            console.error(err);
          }));

        case 27:
          paymentIntent = _context.sent;
          order.payment_id = paymentIntent.id;
          _context.next = 31;
          return regeneratorRuntime.awrap(_axios["default"].post(process.env.API_URL + '/api/orders', {
            data: order
          }, {
            headers: headers
          }).then(function (res) {
            return res;
          })["catch"](function (err) {
            console.error(err);
            return err.response.data;
          }));

        case 31:
          // CREATE STRAPI ORDER WITH paymentIntent.id or client_secret
          res.json({
            data: paymentIntent.client_secret
          });

        case 32:
        case "end":
          return _context.stop();
      }
    }
  });
});
var _default = router;
exports["default"] = _default;