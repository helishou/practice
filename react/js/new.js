/*
 * @Author       : helishou
 * @Date         : 2021-08-11 19:16:55
 * @LastEditTime : 2021-08-11 19:26:45
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : f:\桌面\front do\Webpack进阶\new.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
// while(line=readline()){
//     let lines=line.split(',')
//     let param=JSON.parse(lines[1]）

//     let a=lines[0].replace(reg,(s,s2)=>{
//         return param[s2]
//     })
//     console.log(a)
// }
function test(a,param){
        // let param=JSON.parse(param)
        let reg=/{{(.*?)}}/g
        let c=a.replace(reg,(s,s2)=>{
            let result=s2.split('.')
            let r=param
            for(let i =0;i<result.length;i++){
                console.log(r)
                r=r[result[i]]
            }
            return r
        })
        console.log(c)
}
test('{{name}}很厉害，趁着{{info.school}}放暑假，去{{info.city}}获得了{{info.gold}}个金牌！', {name: '杨倩', info: {age: 21, school:"清华大学", city: "东京", gold: 2}})