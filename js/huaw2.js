/*
 * @Author       : helishou
 * @Date         : 2021-08-11 19:08:24
 * @LastEditTime : 2021-08-11 19:08:25
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : f:\桌面\front do\Webpack进阶\js\huaw2.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
function solute(s){
    let arr=s.split("")
    let mid=Math.floor(arr.length/2)
    for(let len=mid;len>=2;len--){
      for(let i=0;i<arr.length;i++){
        let start=i,next=i+len
        let time=1
        while(next<arr.length&&arr.slice(start,start+len).join("")==arr.slice(next,next+len).join("")){
          time++
          start=next
          next+=len
        }
        if(time>=2){
          arr.splice(i,(time)*len,arr.slice(i,len).join("").toUpperCase(),time)
          i+=len
        }
      }
    }
    for(let i=0;i<arr.length;){
      let end=i
      while(arr[end]==arr[i]){
        end++
      }
      if(end-i>=3){
        arr.splice(i+1,end-i-1,end-i)
      }
      else {
        i=end
      }
    }
    return arr.join("")
  }
  console.log(solute('abcabcaaaaa'))