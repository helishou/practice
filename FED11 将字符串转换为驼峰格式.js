/*
 * @Author       : helishou
 * @Date         : 2021-09-19 23:28:47
 * @LastEditTime : 2021-09-19 23:40:29
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \print\practice\FED11 将字符串转换为驼峰格式.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
function cssStyle2DomStyle(sName) {
    return sName.replace(/\-[a-z]/g , function(a, b){
        return b == 0 ? a.replace('-','') : a.replace('-','').toUpperCase();
    });
}
console.log(cssStyle2DomStyle('font-size'))
