/*
 * @Author       : helishou
 * @Date         : 2021-08-23 17:04:39
 * @LastEditTime : 2021-08-23 17:06:04
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \插曲-测试\扁平化数组还原.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
var data = [
  { name: 'ABC', parent: 'DEF', relation: 'ghi', depth: 1 },
  { name: 'DEF', parent: 'null', relation: 'null', depth: 0 },
  { name: 'new_name', parent: 'ABC', relation: 'rel', depth: 2 },
  { name: 'a_name', parent: 'null', relation: 'rel', depth: 2 },
];
var dataMap = {};
data.forEach(function (node) {
  dataMap[node.name] = node;
});
console.log(dataMap, 'dataMap');
var tree = [];
data.forEach(function (node) {
  // find parent
  var parent = dataMap[node.parent];
  if (parent) {
    // create child array if it doesn't exist
    (parent.children || (parent.children = []))
      // add node to parent's child array
      .push(node);
  } else {
    // parent is null or missing
    tree.push(node);
  }
});
console.log(tree);
