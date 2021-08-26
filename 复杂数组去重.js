/*
 * @Author       : helishou
 * @Date         : 2021-08-17 14:48:54
 * @LastEditTime : 2021-08-17 15:37:59
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \插曲-测试\复杂数组去重.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
function uniqueFunc(arr, uniId) {
  const res = new Map();
  return arr.filter((item) => !res.has(item[uniId]) && res.set(item[uniId], 1));
}
var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, { b: 's',a:'s' }, { a: 's',b:('s') }, {}];
// console.log(uniqueFunc(arr));

console.log(Object.entries({b: 's',a:'s'}).toString() === Object.entries({ a: 's',b:'s' }).toString());