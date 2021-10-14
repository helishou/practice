/*
 * @Author       : helishou
 * @Date         : 2021-09-19 22:56:28
 * @LastEditTime : 2021-09-19 23:14:48
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \print\practice\FED10 颜色字符串转换.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
function rgb2hex(sRGB) {
    let reg=/\((.*)\)/
    let result=''
    console.log(sRGB.match(/(\d+)/g))
    sRGB.replace(/(\d+)/g,(r,d)=>{
        // console.log(Number(r).toString(16))
        result+=Number(r).toString(16).length===1?'0'+Number(r).toString(16):Number(r).toString(16)
    })
    return result.length===6?('#'+result):sRGB
}
console.log(rgb2hex('rgb(255,255,100)'))