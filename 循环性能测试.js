/*
 * @Author       : helishou
 * @Date         : 2021-08-08 22:00:29
 * @LastEditTime : 2021-08-25 17:50:19
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \插曲-测试\循环性能测试.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
const ARR_SIZE = 6666666
const hugeArr = new Array(ARR_SIZE).fill(1)
/* node环境下记录方法执行前后内存中已用到的堆的差值 */
function heapRecord(fun) {
    if (typeof window == 'undefined' ) {
        const startHeap = process.memoryUsage().heapUsed
        fun()
        const endHeap = process.memoryUsage().heapUsed
        const heapDiff = endHeap - startHeap
        console.log('已用到的堆的差值: ', heapDiff)
    } else {
        fun()
    }
}
// 方法一，普通for循环
function method1() {
    var arrCopy = []
    console.time('method1')
    for (let i = 0; i < hugeArr.length; i++) {
        arrCopy.push(hugeArr[i])
    }
    console.timeEnd('method1')
}
// 方法二，缓存长度
function method2() {
    var arrCopy = []
    console.time('method2')
    for (let i = 0, len = hugeArr.length; i < len; i++) {
        arrCopy.push(hugeArr[i])
    }
    console.timeEnd('method2')
}
// 方法三，取值和判断合并
function method3() {
    var arrCopy = []
    console.time('method3')
    for (let i = 0, item; item = hugeArr[i]; i++) {
        arrCopy.push(item)
    }
    console.timeEnd('method3')
}
// 方法四，i--与判断合并，倒序迭代
function method4() {
    var arrCopy = []
    console.time('method4')
    for (let i = hugeArr.length; i--;) {
        arrCopy.push(hugeArr[i])
    }
    console.timeEnd('method4')
}
// 方法五，while
function method5() {
    var arrCopy = []
    console.time('method5')
    let i = 0
    while (i < hugeArr.length) {
        arrCopy.push(hugeArr[i++])
    }
    console.timeEnd('method5')
}
// 方法六,forEach
function method6() {
    var arrCopy = []
    console.time('method6')
    hugeArr.forEach((item) => {
        arrCopy.push(item)
    })
    console.timeEnd('method6')
}
// 方法七,map
function method7() {
    var arrCopy = []
    console.time('method7')
    arrCopy = hugeArr.map(item => item)
    console.timeEnd('method7')
}
// 方法八,for of
function method8() {
    var arrCopy = []
    console.time('method8')
    for (let item of hugeArr) {
        arrCopy.push(item)
    }
    console.timeEnd('method8')
}
// 方法⑨,reduce
function method9() {
    var arrCopy = []
    console.time('method8')
    hugeArr.reduce((pre,next)=>{
        pre.push(next)
        return pre
    },arrCopy) 
    console.timeEnd('method8')
}
// 方法一，普通for循环
// 方法二，缓存长度
// 方法三，取值和判断合并
// 方法四，i--与判断合并，倒序迭代

for(let j=0;j<=0;j++){
    for(let i=1;i<=9;i++){
        eval(`heapRecord(method${i})`)     
    }
    console.log('end')
}
