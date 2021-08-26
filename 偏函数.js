/*
 * @Author       : helishou
 * @Date         : 2021-08-08 20:37:15
 * @LastEditTime : 2021-08-08 20:41:41
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : f:\桌面\front do\Webpack进阶\插曲-测试\偏函数.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
function clg(a, b, c) {
    console.log(a, b, c)
}
function partial(fn, ...args) {
    return (...arg) => {
        let tempArg=[]
        for(let i =0;i<args.length;i++){
            if(args[i]!==undefined){
                tempArg.push(args[i])
            }else{
                tempArg.push(arg.shift())
            }
        }
        return fn(...tempArg, ...arg)
    }
}
let partialClg = partial(clg, undefined, 2)
partialClg(1, 3)  // 依次打印：1, 2, 3