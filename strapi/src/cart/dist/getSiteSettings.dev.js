"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSiteSettings = getSiteSettings;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getSiteSettings(API_URL) {
  var _ref, data;

  return regeneratorRuntime.async(function getSiteSettings$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _axios["default"])(API_URL + '/api/site').then(function (res) {
            return res.data;
          })["catch"](function (err) {
            console.error(err);
          }));

        case 2:
          _ref = _context.sent;
          data = _ref.data;
          return _context.abrupt("return", {
            site: data.attributes
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}