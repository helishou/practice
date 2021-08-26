/*
 * @Author       : helishou
 * @Date         : 2021-07-17 17:35:54
 * @LastEditTime : 2021-07-30 16:36:47
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : f:\桌面\front do\Webpack进阶\插曲-测试\全局环境有两个.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
// global.t=1
const t=2
function f(){
    console.log(this)
    console.log(t)
}
// debugger
f()
console.log(global.t,this)
