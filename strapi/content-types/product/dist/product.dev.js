"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;

var _strapiGraphql = require("../strapi-graphql.js");

function get(API_URL, _ref) {
  var slug, query;
  return regeneratorRuntime.async(function get$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          slug = _ref.slug;
          query = "\n    query {\n      products (\n        filters: {\n          slug: {\n            eq: \"".concat(slug, "\"\n          }\n        }\n      ) {\n        data {\n          id\n          attributes {\n            title\n            content\n            featured_image {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n            price\n            discount_price\n            slug\n            stock\n            weight\n            volume\n            product_categories {\n              data {\n                attributes {\n                  title\n                  slug\n                  product_categories {\n                    data {\n                      attributes {\n                        title\n                        slug\n                      }\n                    }\n                  }\n                }\n              }\n            }\n            product_tags {\n              data {\n                attributes {\n                  title\n                  slug\n                }\n              }\n            }\n            product_attribute {\n              data {\n                attributes {\n                  title\n                }\n              }\n            }\n            assigned_product_attributes {\n              product_attribute_value {\n                data {\n                  attributes {\n                    title\n                  }\n                }\n              }\n              price\n              discount_price\n              stock\n              weight\n              volume\n            }\n            visual_attributes {\n              product_attribute {\n                data {\n                  attributes {\n                    title\n                  }\n                }\n              }\n              product_attribute_values {\n                data {\n                  attributes {\n                    title\n                  }\n                }\n              }\n              conditional_assigned_product_attribute_value {\n                data {\n                  attributes {\n                    title\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n        \n    ");
          _context.next = 4;
          return regeneratorRuntime.awrap((0, _strapiGraphql.graphql)(API_URL, query));

        case 4:
          return _context.abrupt("return", _context.sent);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}