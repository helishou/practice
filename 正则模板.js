/*
 * @Author       : helishou
 * @Date         : 2021-08-08 15:57:36
 * @LastEditTime : 2021-08-08 16:05:10
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : f:\桌面\front do\Webpack进阶\插曲-测试\正则模板.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
function tpl(templateStr,arr){
    var reg=/{{\$(\d)}}/g
    var newStr=templateStr.replace(reg,function(s,number,offset,string,NamedCaptureGroup){
        console.log(s,number,offset,string,NamedCaptureGroup)
        return arr[number]
    })
    return newStr
}
var templateStr='<div>{{$1}}sssss{{$0}}</div>'
var arr=['2332','66666','123']
console.log(tpl(templateStr,arr))