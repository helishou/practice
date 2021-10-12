/*
 * @Author       : helishou
 * @Date         : 2021-09-22 19:09:06
 * @LastEditTime : 2021-09-22 19:16:35
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \promise多次执行.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */

async function b() {
  for (let i = 0; i < 1; i++) {
    try {
      let result = await Promise.reject('1')
    } catch (e) {
      console.log(e);
    }
    return 1
  }
  return 2
}
console.log(b())