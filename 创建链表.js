/*
 * @Author       : helishou
 * @Date         : 2021-07-17 22:46:04
 * @LastEditTime : 2021-07-17 22:46:04
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : f:\桌面\front do\Webpack进阶\插曲-测试\创建链表.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */

var i = 10, root = {index: "NONE"}, node = root;

// 创建链表
while (i > 0) {
  node.next = node = new Object;
  node.index = i--;  // 这里可以开始给新node添加成员
}

// 测试
node = root;
while (node = node.next) {
  console.log(node.index);
}