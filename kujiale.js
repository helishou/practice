/*
 * @Author       : helishou
 * @Date         : 2021-09-12 13:02:35
 * @LastEditTime : 2021-09-12 13:32:50
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \1.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
const solve=(list)=>{
    let fast=list
    let slow=list
    do{
        slow=slow.next
        fast=fast.next
        if(!fast){
            return false
        }
        fast=fast.next
        if(!fast){
            return false
        }
    }while(fast!=slow)
    return true
}

const solve2=(martix)=>{
    if(martix.length===0) return 0
    martix=martix.map(item=>item.map((item2)=>item2==-1?Infinity:item2))
    let dp=new Array(martix.length).fill(0).map((item)=>new Array(martix[0]?.length)).fill(0)
    let dp2=new Array(martix.length).fill(0).map((item)=>new Array(martix[0]?.length)).fill(0).map(()=>new Array())
    dp[0][0]=martix[0][0]
    dp2[0][0]=[[0,0]]
    for(let i=1;i<martix.length;i++){
        dp[i][0]=dp[i-1][0]+martix[i][0]
        dp2[i][0].push(...dp[i-1][0],[i,0])
    }
    for(let j=1;j<martix[0].length;j++){
        dp[0][j]=dp[0][j-1]+martix[0][j]
        dp2[i][0].push(...dp[0][j-1],[0,j-1])
    }
    for(let i=1;i<martix.length;i++){
        for(let j=1;j<martix[0].length;j++){
            if(dp[i-1][j]>dp[i][j-1]){
                dp[i][j]=dp[i][j-1]+martix[i][j]
                dp2[i][j].push(...dp2[i][j-1],[i,j])
            }else{
                dp[i][j]=dp[i-1][j]+martix[i][j]
                dp2[i][j].push(...dp2[i-1][j],[i,j])
            }
            
        }
    }
    return dp2[martix.length-1][martix[0].length-1]===Infinity?false:dp2[martix.length-1][martix[0].length-1]
}