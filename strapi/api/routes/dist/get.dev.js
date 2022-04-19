"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)(); // https://forum.strapi.io/t/strapi-v4-cant-access-custom-fields-from-users-me-via-graphql/13744

router.post('/get', function _callee(req, res) {
  var endpoint, jwt, headers, _ref, data, error;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // sanitise req.body
          endpoint = req.body.endpoint;
          jwt = req.signedCookies.jwt;
          headers = {
            Authorization: "Bearer ".concat(jwt)
          };
          _context.next = 5;
          return regeneratorRuntime.awrap(_axios["default"].get(process.env.API_URL + endpoint, {
            headers: headers
          }).then(function (res) {
            return res;
          })["catch"](function (err) {
            console.log(err);
            return err.response;
          }));

        case 5:
          _ref = _context.sent;
          data = _ref.data;
          error = _ref.error;
          res.json({
            data: data,
            error: error
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
});
var _default = router;
exports["default"] = _default;