/*
 * @Author       : helishou
 * @Date         : 2021-07-28 18:45:21
 * @LastEditTime : 2021-07-30 16:44:10
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : f:\桌面\front do\Webpack进阶\插曲-测试\循环调用c.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
var a = require('./循环调用a.js');
var b = require('./循环调用b.js');
console.log('在 main.js 之中, a.done=%j, b.done=%j', a.done, b.done);