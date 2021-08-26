/*
 * @Author       : helishou
 * @Date         : 2021-08-07 23:07:41
 * @LastEditTime : 2021-08-16 00:48:35
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \babel\class.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
class A{
    constructor(){
        this.a=1
    }
}
A.prototype.constructor=function(){this.a=2}
class B extends A{
    constructor(){
        super()
        console.log(this.a)
        A.prototype.constructor.call(this)
        console.log(this.a)
    }
}
new B()
// babel src --out-dir dist