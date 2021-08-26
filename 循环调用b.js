/*
 * @Author       : helishou
 * @Date         : 2021-07-28 18:35:06
 * @LastEditTime : 2021-07-30 16:43:45
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : f:\桌面\front do\Webpack进阶\插曲-测试\循环调用b.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
exports.done = false;
var a = require('./循环调用a.js');
console.log('在 b.js 之中，a.done = %j', a.done);
exports.done = true;
console.log('b.js 执行完毕');