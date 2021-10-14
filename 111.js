/*
 * @Author       : helishou
 * @Date         : 2021-09-10 10:53:14
 * @LastEditTime : 2021-09-10 11:21:25
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : d:\desk\sakura\practice\111.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
var findAnagrams = function(s, p) {
    let l=p.length
    let m=new Map()
    let result=[]
    Array.prototype.forEach.call(p,a=>{
        m.set(a,m.has(a)?m.get(a)+1:1)
    })
    for(let i = 0;i<s.length-l+1;i++){
        let r=test(i)
        if(r[0]){
            result.push(i)
        }else{
            i=r[1]
        }
    }
    function test(j){
        let tempm=new Map([...m])
        for(let i=j;i<j+l;i++){
            if(tempm.has(s[i])){
                if(tempm.get(s[i])>0){
                    tempm.set(s[i],tempm.get(s[i])-1)
                }else{
                    return [false,j]
                }
            }else{
                return [false,i]
            }
        }
        return [true]
    }
    return result
};

console.log(findAnagrams("ababcccc","ab"))