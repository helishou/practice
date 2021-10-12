/*
 * @Author       : helishou
 * @Date         : 2021-09-22 15:25:37
 * @LastEditTime : 2021-09-22 15:48:01
 * @LastEditors  : helishou
 * @Description  : 数列（顺序为: 一堆负数 + 一堆 0 + 一堆正数），求最后一个出现的负数和第一个出现的正数
 * @FilePath     : \二分进阶.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */

const solve=(arr,target)=>{
    let l=0
    let r=arr.length
    const result={}
    while(l<r){
        let mid= l + ~~((r-l+1)>>>1)
        if(arr[mid]<target){
            l=mid
        }else{
            r=mid-1
        }
        console.log(l,r,'1')
    }
    result.left=arr[0]<target?l:null
    l=0
    r=arr.length
    while(l<r){
        let mid= l + ~~((r-l)>>>1)
        if(arr[mid]<=target){
            l=mid+1
        }else{
            r=mid
        }
        console.log('2')
    }
    result.right=l<arr.length?l:null
    return result
}
console.log(solve([-2, -1, 0, 0, 0, 0,1,3, 4, 5],8))