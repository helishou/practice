/*
 * @Author       : helishou
 * @Date         : 2021-08-29 19:29:08
 * @LastEditTime : 2021-08-29 19:36:57
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \计数.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */

function A(){
    this.c=0
}
A.prototype.countMap=new Map()
A.prototype.count=function(){
    let result=1
    if(this.countMap.has(this)){
        result=this.countMap.get(this)+1 
    }
    this.countMap.set(this,result)
    return result
}
let a=new A()
let b=new A()
console.log(a.count())
console.log(a.count())
console.log(a.count())
console.log(b.count())
console.log(b.count())
console.log(b.count())
console.log(b.count())