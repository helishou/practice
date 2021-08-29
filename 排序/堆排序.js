/*
 * @Author       : helishou
 * @Date         : 2021-08-29 23:59:41
 * @LastEditTime : 2021-08-30 00:26:12
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \排序\堆排序.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */

function heapsort(array) {
  let l = array.length;
  let middle = ~~(l >>> 1);
  for (let i = middle - 1; i >= 0; i--) {
    sort(array, i, l);
  }
  for (let i = l - 1; i >= 0; i--) {
    swap(array, i, 0);
    sort(array, 0, i);
  }
  return array;
}
function sort(arr, i, l) {
  let num = i * 2 + 1;
  let largest = i;
  if (num < l && arr[num] > arr[largest]) {
    largest = num;
  }
  if (num + 1 < l && arr[num + 1] > arr[largest]) {
    largest = num + 1;
  }
  if (largest != i) {
    swap(arr, largest, i);
    sort(arr, largest, l);
  }
}

function swap(array, i, j) {
  [array[j], array[i]] = [array[i], array[j]];
}

let a;
// console.time('push');
a = [];
l = 100;
for (i = 0; i < l; i++) {
  a.push(~~(10 * l * Math.random()));
}
b = [...a];
c = [...a];
console.time("堆排序");
console.log(heapsort(a));
console.timeEnd("堆排序");
