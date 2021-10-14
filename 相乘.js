/*
 * @Author       : helishou
 * @Date         : 2021-09-20 01:09:57
 * @LastEditTime : 2021-09-20 01:09:57
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \print\practice\相乘.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
function multiply(a, b) {
    let count=0
    while(a<1){
        a=a*10
        count++
    }
    while(b<1){
        b=b*10
        count++
    }
    return a*b/(10**count)
}
console.log(multiply(0.1,3))