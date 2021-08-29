/*
 * @Author       : helishou
 * @Date         : 2021-08-26 20:09:01
 * @LastEditTime : 2021-08-26 20:16:56
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \promise.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
const a = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1111");
      resolve();
    }, 2000);
  });
};
const b = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2222");
      resolve();
    }, 1000);
  });
};
Promise.resolve()
  .then(() => {
    return a();
  })
  .then((value) => {
    b();
  });
