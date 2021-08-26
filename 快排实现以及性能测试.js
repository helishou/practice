/*
 * @Author       : helishou
 * @Date         : 2021-08-25 17:57:35
 * @LastEditTime : 2021-08-26 14:21:41
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \插曲-测试\快排实现以及性能测试.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */

/**
 *
 * @param arr 需要进行三路快排的数组
 * @param L 数组的起始位置
 * @param R 数组的末尾位置
 * @returns {{lt: *, gt: *}}
 */
const partition = function (arr, L, R, func) {
  // 基准值为数组的零号元素
  let p = arr[L];
  // 左区间的初始值: L
  let lt = L;
  // 右区间的初始值: R+1
  let gt = R + 1;
  for (let i = L + 1; i < gt; ) {
    if (func(arr[i], p) === 0) {
      // 当前i指向的元素等于p
      i++;
    } else if (func(arr[i], p) > 0) {
      // 当前i指向的元素大于p，将gt-1处的元素与当前索引处的元素交换位置，gt--
      [arr[gt - 1], arr[i]] = [arr[i], arr[gt - 1]];
      gt--;
    } else {
      // 当前i指向的元素小于p，将lt+1处的元素与当前索引处的元素交换位置，lt+1，i+1
      [arr[lt + 1], arr[i]] = [arr[i], arr[lt + 1]];
      lt++;
      i++;
    }
  }
  //   console.log(arr[lt], arr[L], arr);
  // i走向gt处，除了基准值外的元素，其余的空间已经分区完毕，交换基准值与lt处的元素，lt-1，最终得到我们需要的三个区间
  [arr[L], arr[lt]] = [arr[lt], arr[L]];
  lt--;
  // console.log(`三路快排后的数组: ${arr}`);
  return { lt: lt, gt: gt };
};

const insertSort = function (arr, L, R, func) {
  let temp;
  let index;
  for (let i = L; i < R; i++) {
    temp = arr[i + 1];
    index = i;
    while (func(arr[index], temp) > 0 && index >= 0) {
      arr[index + 1] = arr[index];
      index--;
    }
    arr[index + 1] = temp;
  }
  // return arr
};

const threeWayFastRow = function (arr, L, R, func) {
  // 当前数组的起始位置大于等于数组的末尾位置时退出递归
  if (L >= R) {
    return false;
  }
  let obj = partition(arr, L, R, func);
  // 递归执行: 将没有大于p,和小于p区间的元素在进行三路快排
  threeWayFastRow(arr, L, obj.lt, func);
  threeWayFastRow(arr, obj.gt, R, func);
};

const threeWayFastRowAndInsett = function (arr, L, R, func) {
  // 当前数组的起始位置大于等于数组的末尾位置时退出递归
  if (L >= R) {
    return false;
  }
  // 递归执行: 将没有大于p,和小于p区间的元素在进行三路快排
  if (R - L <= 22) {
    insertSort(arr, L, R, func);
  } else {
    let obj = partition(arr, L, R, func);
    threeWayFastRow(arr, L, obj.lt, func);
    threeWayFastRow(arr, obj.gt, R, func);
  }
};

// let a;
// // console.time('push');
// a = [];
// l=101
// for (i = 0; i < l; i++) {
//   a.push(~~(Math.random()*100));
// }
// threeWayFastRowAndInsett(a, 0, l-1,(a,b)=>a-b);
// console.log(a)
// 测速
// 三路快排: 328.724ms
// 三路快排插入: 245.777ms
// 默认: 686.362ms
let a;
// console.time('push');
a = [];
l = 211;
for (i = 0; i < l; i++) {
  a.push(Math.random());
}

b = [...a];
c = [...a];
d = [...a];
console.time('三路快排');
threeWayFastRow(a, 0, l - 1, (a, b) => a - b);

console.timeEnd('三路快排');
console.time('三路快排插入');
threeWayFastRowAndInsett(b, 0, l - 1, (a, b) => a - b);

console.timeEnd('三路快排插入');
console.time('默认');
c.sort((a, b) => {
  return a - b;
});

console.timeEnd('默认');

