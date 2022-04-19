"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.graphql = graphql;

var _axios = _interopRequireDefault(require("axios"));

var _format2 = require("../src/_format.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function graphql(API_URL, query) {
  var _ref, data, error;

  return regeneratorRuntime.async(function graphql$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].post(API_URL + '/graphql', {
            query: query
          }).then(function (res) {
            return res.data;
          })["catch"](function (err) {
            console.error(err);
            return err.response.data;
          }));

        case 2:
          _ref = _context.sent;
          data = _ref.data;
          error = _ref.error;
          data = (0, _format2._format)(data);
          return _context.abrupt("return", {
            data: data,
            error: error
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}