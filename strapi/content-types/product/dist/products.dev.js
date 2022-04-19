"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;

var _strapiGraphql = require("../strapi-graphql.js");

function get(API_URL) {
  var query;
  return regeneratorRuntime.async(function get$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = "\n    query {\n      products {\n        data {\n          id\n          attributes {\n            title\n            excerpt\n            featured_image {\n              data {\n                attributes {\n                  name\n                  alternativeText\n                  url\n                }\n              }\n            }\n            price\n            discount_price\n            slug\n            stock\n            weight\n            product_categories {\n              data {\n                attributes {\n                  title\n                  slug\n                  product_categories {\n                    data {\n                      attributes {\n                        title\n                        slug\n                      }\n                    }\n                  }\n                }\n              }\n            }\n            product_tags {\n              data{\n                attributes{\n                  title\n                  slug\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    ";
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _strapiGraphql.graphql)(API_URL, query));

        case 3:
          return _context.abrupt("return", _context.sent);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}