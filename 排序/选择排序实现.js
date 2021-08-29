/*
 * @Author       : helishou
 * @Date         : 2021-08-29 13:55:56
 * @LastEditTime : 2021-08-29 14:10:36
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \排序\选择排序实现.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
let a = [];
l = 1000;
for (i = 0; i < l; i++) {
  a.push(~~(10 * l * Math.random()));
}
let b=[...a]
function selectSort(arr, func = (a, b) => a - b) {
  console.time("选择排序耗时");
  let l = arr.length;
  let index;
  for (var i = 0; i < l-1; i++) {
    index = i;
    for (var j = i + 1; j < l; j++) {
      if (func(arr[index], arr[j]) > 0) {
        index = j;
      }
    }
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }
  console.timeEnd("选择排序耗时");
  return arr;
}

let result = JSON.stringify(selectSort(a));
let result2 = JSON.stringify(a.sort((a,b)=>a-b));
console.log(result);
console.log(result2);
console.log(result2==result);
