/*
 * @Author       : helishou
 * @Date         : 2021-08-29 14:42:01
 * @LastEditTime : 2021-08-29 14:42:01
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \排序\插入排序实现.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
function binaryInsertionSort(array) {
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
        console.time('二分插入排序耗时：');

        console.timeEnd('二分插入排序耗时：');

        return array;
    } else {
        return 'array is not an Array!';
    }
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(binaryInsertionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
