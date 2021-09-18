/*
 * @Author       : helishou
 * @Date         : 2021-09-14 18:09:56
 * @LastEditTime : 2021-09-14 18:11:59
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \debounce.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
const debounce=(fnc,delay)=>{
    let time=Date.now()
    return function(...args){
        let that=this
        let current=Date.now()
        if(current-time>now){
            return fnc.apply(that,args)
        }else{
            return 
        }
    }
}