/*
 * @Author       : helishou
 * @Date         : 2021-08-03 01:31:52
 * @LastEditTime : 2021-08-03 01:31:52
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : f:\桌面\二分查找.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
let count=1
const fn=(array,left,right)=>{
    let mid
    //闭区间，要判断到left，right
    while(left<=right){
        count++
        //调试用，防止死循环
        if(count >1000){
            console.log('死循环')
            break
        }
        mid=(left+right)>>>1;
        if(array[mid]>0){//向左查找
            right=mid-1
        }else if(array[mid]==0){//找到一个0
            if(array[mid-1]===0){//如果左边还是0，则继续向左查找
                right=mid-1
            }else{//左边不是0了，返回左边的值
                return mid-1
            }
        }else{//目标过小，向右查找
            left=mid+1
        }
    }
    //还是找不到，返回-1
    return -1
}
//找右边的正数，同理
const fn2=(array,left,right)=>{
    let mid
    while(left<=right){
        count++
        if(count >1000){
            console.log('死循环2')
            break
        }
        mid=(left+right)>>>1;
        if(array[mid]<0){
            left=mid+1
        }else if(array[mid]==0){
            if(array[mid+1]===0){
                left=mid+1
            }else{
                if(mid+1>=array.length) return -1
                return mid+1
            }
        }else{
            right=mid-1
        }
    }
    return -1
}
array=[0,0,0]
for(let i=0;i<10;i++){
    console.log(fn(array,0,array.length-1))
    // console.log(array)
    console.log(fn2(array,0,array.length-1))
    array.unshift(-2)
    array.push(2)
}
