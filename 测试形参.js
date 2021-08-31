/*
 * @Author       : helishou
 * @Date         : 2021-08-31 19:05:08
 * @LastEditTime : 2021-08-31 19:08:06
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \已考\测试形参.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
function a(a,b,c,d){
    let e=1
    let f=2
    let g=3
    d(e,f,g)
    // console.log(a,b,c,d)
}
g=1
a(1,2,3,(g)=>{
    console.log(g)
})