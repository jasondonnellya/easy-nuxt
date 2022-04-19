"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _asyncIterator(iterable) { var method; if (typeof Symbol !== "undefined") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

var app = (0, _express["default"])();

function ls(path) {
  var dir, array, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, dirent;

  return regeneratorRuntime.async(function ls$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_fs["default"].promises.opendir(path));

        case 2:
          dir = _context.sent;
          array = [];
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _context.prev = 6;
          _iterator = _asyncIterator(dir);

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(_iterator.next());

        case 10:
          _step = _context.sent;
          _iteratorNormalCompletion = _step.done;
          _context.next = 14;
          return regeneratorRuntime.awrap(_step.value);

        case 14:
          _value = _context.sent;

          if (_iteratorNormalCompletion) {
            _context.next = 21;
            break;
          }

          dirent = _value;
          if (!dirent.name.includes('.js')) array.push(dirent.name);

        case 18:
          _iteratorNormalCompletion = true;
          _context.next = 8;
          break;

        case 21:
          _context.next = 27;
          break;

        case 23:
          _context.prev = 23;
          _context.t0 = _context["catch"](6);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 27:
          _context.prev = 27;
          _context.prev = 28;

          if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
            _context.next = 32;
            break;
          }

          _context.next = 32;
          return regeneratorRuntime.awrap(_iterator["return"]());

        case 32:
          _context.prev = 32;

          if (!_didIteratorError) {
            _context.next = 35;
            break;
          }

          throw _iteratorError;

        case 35:
          return _context.finish(32);

        case 36:
          return _context.finish(27);

        case 37:
          return _context.abrupt("return", array);

        case 38:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[6, 23, 27, 37], [28,, 32, 36]]);
}

var componentsList = [];
var preparedComponents = [];

function prepareComponent(name, url) {
  if (componentsList.includes(name)) return;
  componentsList.push(name);
  preparedComponents.push({
    name: name,
    url: url
  });
}

function declareDirectory(directory, folder, url) {
  var components, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _value2, component, parsedComponent, parsedURL;

  return regeneratorRuntime.async(function declareDirectory$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(ls(directory)["catch"](console.error));

        case 2:
          components = _context2.sent;
          _iteratorNormalCompletion2 = true;
          _didIteratorError2 = false;
          _context2.prev = 5;
          _iterator2 = _asyncIterator(components);

        case 7:
          _context2.next = 9;
          return regeneratorRuntime.awrap(_iterator2.next());

        case 9:
          _step2 = _context2.sent;
          _iteratorNormalCompletion2 = _step2.done;
          _context2.next = 13;
          return regeneratorRuntime.awrap(_step2.value);

        case 13:
          _value2 = _context2.sent;

          if (_iteratorNormalCompletion2) {
            _context2.next = 28;
            break;
          }

          component = _value2;

          if (!component.includes('.vue')) {
            _context2.next = 23;
            break;
          }

          parsedComponent = component.replace('.vue', '');
          parsedComponent = parsedComponent.replace('_', folder);
          parsedURL = (directory + component).replace('.' + url, '');
          prepareComponent(parsedComponent, parsedURL);
          _context2.next = 25;
          break;

        case 23:
          _context2.next = 25;
          return regeneratorRuntime.awrap(declareDirectory(directory + component + '/', component, url));

        case 25:
          _iteratorNormalCompletion2 = true;
          _context2.next = 7;
          break;

        case 28:
          _context2.next = 34;
          break;

        case 30:
          _context2.prev = 30;
          _context2.t0 = _context2["catch"](5);
          _didIteratorError2 = true;
          _iteratorError2 = _context2.t0;

        case 34:
          _context2.prev = 34;
          _context2.prev = 35;

          if (!(!_iteratorNormalCompletion2 && _iterator2["return"] != null)) {
            _context2.next = 39;
            break;
          }

          _context2.next = 39;
          return regeneratorRuntime.awrap(_iterator2["return"]());

        case 39:
          _context2.prev = 39;

          if (!_didIteratorError2) {
            _context2.next = 42;
            break;
          }

          throw _iteratorError2;

        case 42:
          return _context2.finish(39);

        case 43:
          return _context2.finish(34);

        case 44:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[5, 30, 34, 44], [35,, 39, 43]]);
}

function overrideComponents(url) {
  var __componentPath;

  return regeneratorRuntime.async(function overrideComponents$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          __componentPath = '.' + url;
          _context3.next = 3;
          return regeneratorRuntime.awrap(declareDirectory(__componentPath, null, url));

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function getComponents(url) {
  var __componentPath;

  return regeneratorRuntime.async(function getComponents$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          __componentPath = '.' + url;
          _context4.next = 3;
          return regeneratorRuntime.awrap(declareDirectory(__componentPath, null, url));

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
}

app.use(_bodyParser["default"].json());
app.post('/get-components', function _callee(req, res) {
  var _req$body$data, url, override;

  return regeneratorRuntime.async(function _callee$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _req$body$data = req.body.data, url = _req$body$data.url, override = _req$body$data.override;
          preparedComponents = [];
          componentsList = [];
          _context5.next = 5;
          return regeneratorRuntime.awrap(overrideComponents('/components/' + override));

        case 5:
          _context5.next = 7;
          return regeneratorRuntime.awrap(getComponents(url));

        case 7:
          res.json({
            components: preparedComponents
          });

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  });
});
var _default = app;
exports["default"] = _default;