/*
 * @Author       : helishou
 * @Date         : 2021-09-18 11:01:49
 * @LastEditTime : 2021-09-18 11:10:05
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \print\practice\手写instanceof.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
const instaceof=(a,b)=>{
    if(!Object.is(a)) return false
    a=Object.getPrototypeOf(a)
    while(a!==null){
        if(a===b.prototype){
            return true
        }
        a=Object.getPrototypeOf(a)
    }
    return false
}
console.log(instaceof(1,Object))