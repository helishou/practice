/*
 * @Author       : helishou
 * @Date         : 2021-08-16 00:48:59
 * @LastEditTime : 2021-08-16 00:49:30
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \dist\index.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
"use strict";
var _marked = /*#__PURE__*/regeneratorRuntime.mark(read);
var fs = require("fs");
var path = require("path");

var data = fs.readFileSync(__dirname + path.sep + "input.txt");

data = data.toString().split("\n");

function read() {
  var i, len;
  return regeneratorRuntime.wrap(function read$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          i = 0, len = data.length;

        case 1:
          if (!(i < len)) {
            _context.next = 7;
            break;
          }

          _context.next = 4;
          return data[i];

        case 4:
          i++;
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

var go = read();

function readline() {
  return go.next().value;
}

function print(msg) {
  console.log(msg);
}

exports.readline = readline;
exports.print = print;
exports.read_line = readline;