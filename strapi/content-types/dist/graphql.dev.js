"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = query;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function query(API_URL, query) {
  var _axios$post$then$catc, data;

  return regeneratorRuntime.async(function query$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _axios$post$then$catc = _axios["default"].post(API_URL + 'graphql', {
            data: {
              query: query
            }
          }).then(function (res) {
            return res;
          })["catch"](function (err) {
            console.error(err);
          }), data = _axios$post$then$catc.data;
          return _context.abrupt("return", data);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}