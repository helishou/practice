/*
 * @Author       : helishou
 * @Date         : 2021-07-18 22:36:46
 * @LastEditTime : 2021-07-18 22:36:58
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : f:\桌面\front do\Webpack进阶\插曲-测试\node的事件循环.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
console.log('start')
setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(function() {
    console.log('promise1')
  })
}, 0)
setTimeout(() => {
  console.log('timer2')
  Promise.resolve().then(function() {
    console.log('promise2')
  })
}, 0)
Promise.resolve().then(function() {
  console.log('promise3')
})
console.log('end')