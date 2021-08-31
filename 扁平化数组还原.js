/*
 * @Author       : helishou
 * @Date         : 2021-08-23 17:04:39
 * @LastEditTime : 2021-08-30 11:31:15
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \扁平化数组还原.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
var data = [
  { name: "ABC", parent: "DEF", relation: "ghi", depth: 1 },
  { name: "DEF", parent: "null", relation: "null", depth: 0 },
  { name: "new_name", parent: "ABC", relation: "rel", depth: 2 },
  { name: "a_name", parent: "null", relation: "rel", depth: 2 },
];
var dataMap = {};
data.map((node) => (dataMap[node.name] = node));
console.log(dataMap, "dataMap");
var tree = [];
data.forEach(function (node) {
  var parent = dataMap[node.parent];
  if (parent) {
    (parent.children || (parent.children = [])).push(node);
  } else {
    tree.push(node);
  }
});
console.log(JSON.stringify(tree));
