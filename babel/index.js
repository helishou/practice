/*
 * @Author       : helishou
 * @Date         : 2021-08-16 00:30:05
 * @LastEditTime : 2021-08-16 00:45:14
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \print\index.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */

const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(__dirname+path.sep+"input.txt");

data = data.toString().split("\n");

function* read() {
  for (let i = 0, len = data.length; i < len; i++) {
    yield data[i];
  }
}

let go = read();

function readline() {
  return go.next().value;
}

function print(msg) {
  console.log(msg);
}

exports.readline = readline;
exports.print = print;
exports.read_line = readline;
