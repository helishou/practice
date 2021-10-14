/*
 * @Author       : helishou
 * @Date         : 2021-09-09 09:13:40
 * @LastEditTime : 2021-09-09 11:09:18
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : d:\desk\sakura\practice\map循环全排列.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */

function solve(data) {
    let length = data.length
    if (length === 0) return
    const dfs = (index, pre) => data[index].map(item => length - 1 == index ? console.log((pre + ',' + item).split(',')) : dfs(index + 1, pre ? pre + ',' + item : item))
    dfs(0, '')
}
solve([
    ['裙子', '裤子', '上衣'],
    ['s', 'm', 'l'],
    ['红色', '白色', '黄色', '绿色']
])