/*
 * @Author       : helishou
 * @Date         : 2021-08-08 22:23:14
 * @LastEditTime : 2021-08-08 22:25:15
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : f:\桌面\front do\Webpack进阶\插曲-测试\函数参数个数.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
function test(a, b) {
    console.log(arguments.length)
    console.log(a)
    console.log(b)
}
test(1, 2)
test(undefined, 2)
test( 2)