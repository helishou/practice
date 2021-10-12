/*
 * @Author       : helishou
 * @Date         : 2021-09-22 19:21:59
 * @LastEditTime : 2021-09-22 19:22:00
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \原型链.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
function Person(name) {
    this.name = name
}
var p2 = new Person('king')
console.log(p2.__proto__.__proto__.__proto__.__proto__) //Object
console.log(p2.__proto__.__proto__.__proto__.__proto__.__proto__)//null
console.log(p2.constructor)//Person
console.log(p2.prototype)//underfined
console.log(Person.constructor)//Function
console.log(Person.prototype)//Function