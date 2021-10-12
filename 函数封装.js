/*
 * @Author       : helishou
 * @Date         : 2021-09-20 00:57:37
 * @LastEditTime : 2021-09-20 00:58:58
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \print\practice\函数封装.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
function partialUsingArguments(fn) {
    let arg=Array.prototype.slice.call(arguments,1)
    return function(){
        return fn.call(null,...arg,...arguments)
    }
}
partialUsingArguments(console.log,2,3)(5)