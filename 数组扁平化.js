/*
 * @Author       : helishou
 * @Date         : 2021-09-18 11:15:06
 * @LastEditTime : 2021-09-18 11:29:53
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \print\practice\数组扁平化.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
let arr=[{"name":"DEF","parent":"null","relation":"null","depth":0,"children":[{"name":"ABC","parent":"DEF","relation":"ghi","depth":1,"children":[{"name":"new_name","parent":"ABC","relation":"rel","depth":2}]}]},{"name":"a_name","parent":"null","relation":"rel","depth":2}]
const flatten=(arr)=>{
    let result=[]
    for(let item of arr){
        // console.log(item)
        if(Array.isArray(item.children)){
            arr.push(...item.children)
            delete item.children
            result.push(item)
        }else{
            result.push(item)
        }
    }
    return result
}
console.log(flatten(arr))
