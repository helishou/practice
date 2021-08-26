/* eslint-disable no-param-reassign */
/*
 * @Author       : helishou
 * @Date         : 2021-05-19 00:25:57
 * @LastEditTime : 2021-06-26 23:35:18
 * @LastEditors  : helishou
 * @Description  : 手写Promise
 * @FilePath     : \插曲-Promise实现\src\同步版promise.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
function Promise(executor) {
  console.log('我是自定义的promise');
  // resolve函数
  this.PromiseState = 'pending';
  this.PromiseResult = null;
  const resolve = (data) => {
    // 修改对象的状态
    if (this.PromiseState === 'pending') {
      this.PromiseState = 'fullfilled';
      this.PromiseResult = data;
    }
    // 设置对象结果值
  };
  // reject函数
  const reject = (data) => {
    //    设置状态
    if (this.PromiseState === 'pending') {
      this.PromiseState = 'rejected';
      // 设置对象结果值
      this.PromiseResult = data;
    }
  };
  executor(resolve, reject);
}
// 维护健壮性，设定默认值为Function.prototype
// 因为所有promise的then方法逻辑一致，所以放在原型上
Promise.prototype.then = function then(
  onResolved = Function.prototype, onReject = Function.prototype,
) {
  // 判断传入的参数是否符合要求,不符合则实现Promise穿透
  onResolved = typeof onResolved === 'function' ? onResolved : (data) => data;
  onReject = typeof onReject === 'function' ? onReject : (error) => { throw error; };
  if (this.PromiseState === 'fullfilled') {
    onResolved(this.PromiseResult);
  }
  if (this.PromiseState === 'rejected') {
    onReject(this.PromiseResult);
  }
};
