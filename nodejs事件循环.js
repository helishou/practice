/*
 * @Author       : helishou
 * @Date         : 2021-08-17 16:24:35
 * @LastEditTime : 2021-08-17 16:24:46
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \插曲-测试\nodejs事件循环.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
console.log('script start')

async function async1() {
await async2()
console.log('async1 end')
}
async function async2() {
console.log('async2 end')
}
async1()

setTimeout(function() {
console.log('setTimeout')
}, 0)

new Promise(resolve => {
console.log('Promise')
resolve()
})
.then(function() {
console.log('promise1')
})
.then(function() {
console.log('promise2')
})

console.log('script end')
