/*
 * @Author       : helishou
 * @Date         : 2021-08-29 13:25:24
 * @LastEditTime : 2021-08-29 13:51:30
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \排序\冒泡排序实现.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */

let a = [];
l = 10000;
for (i = 0; i < l; i++) {
  a.push(~~(10*l*Math.random()));
}
b=[...a]
function bubbleSort(arr,func=(a,b)=>a-b){
    console.time('冒泡排序耗时');
    let l=arr.length-1
    while(l>0){
        let pos=0
        for(var i=0;i<l;i++){
            if(func(arr[i],arr[i+1])>0){
                pos=i;
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
            }
        }
        l=pos
    }
    console.timeEnd('冒泡排序耗时');
    return arr
}
function bubbleSort2(arr,func=(a,b)=>a-b){
    console.time('改进后冒泡排序耗时');
    let r=arr.length-1
    let l=0
    while(l<r){
        let pos=l,pos2=r
        for(var i=l;i<r;i++){
            if(func(arr[i],arr[i+1])>0){
                pos=i;
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
            }
        }
        r=pos
        for(var i=r;i>=l;i--){
            if(func(arr[i],arr[i+1])>0){
                pos2=i;
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
            }
        }
        r=pos
        l=pos2
    }
    console.timeEnd('改进后冒泡排序耗时');
    return arr
}
let result=JSON.stringify(bubbleSort(a))
let result2=JSON.stringify(bubbleSort2(b))
console.log(result)
console.log(result2)
console.log(result2==result)