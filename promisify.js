/*
 * @Author       : helishou
 * @Date         : 2021-09-18 09:11:40
 * @LastEditTime : 2021-09-18 09:40:43
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \print\practice\promisify.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
const promisify = (fnc,ctx) => {
  return function (...arg) {
    var that = ctx||this;
    return new Promise((resolve, reject) => {
      arg.push((err, ...result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
      fnc.apply(that, arg);
    });
  };
};

const calb = (a, b) => {
  setTimeout(() => {
    try {
    //   console.log(a);
      b(undefined, a);
    } catch (e) {
      b(e);
    }
  }, 2000);
};
console.time('callback')
calb('1',(err,result)=>{
    console.log('输出结果',err,result)
    console.timeEnd('callback')
})

console.time("promsify");
let p = promisify(calb);
p("pppp1")
  .then((a) => {
    console.log(a);
    console.timeEnd("promsify");
  })
  .catch((e) => {
    console.log("出错了");
  });
