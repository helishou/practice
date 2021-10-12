/*
 * @Author       : helishou
 * @Date         : 2021-09-19 23:47:23
 * @LastEditTime : 2021-09-19 23:48:26
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \print\practice\数字符.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
function count(str) {
    let result = {}
    str.replace(/([^\s])/g,($0,$1)=>{
        if(result[$1]){
            result[$1]+=1
        }else{
            result[$1]=1
        }
    })
    return result
}
console.log(count('just for test!!!'))