/*
 * @Author       : helishou
 * @Date         : 2021-07-17 22:33:15
 * @LastEditTime : 2021-07-17 22:52:56
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : f:\桌面\front do\Webpack进阶\插曲-测试\a.x=a.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
'use strict'
// 声明“原始的变量a”
var a = {n:1};

// 使它的属性表冻结（不能再添加属性）
Object.freeze(a);

try {
  // 本节的示例代码
  a.x = a = {n:2};
}
catch (error) {
  // 异常发生，说明第二次赋值“a.x = ...”中操作的`a`正是原始的变量a
  console.log('第二次赋值导致异常.',error);
}

// 第一次赋值是成功的
console.log(a); //
a.x=3
console.log(a); //