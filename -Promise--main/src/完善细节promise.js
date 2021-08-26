/* eslint-disable no-param-reassign */
/*
 * @Author       : helishou
 * @Date         : 2021-05-19 00:25:57
 * @LastEditTime : 2021-06-26 23:48:36
 * @LastEditors  : helishou
 * @Description  : 异步完善
 * @FilePath     : \插曲-Promise实现\src\promise.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
function Promise(executor) {
  console.log('我是自定义的promise3');
  // resolve函数
  this.PromiseState = 'pending';
  this.PromiseResult = null;
  // this.onResolvedFuction = Function.prototype;
  // this.onRejectedFuction = Function.prototype;
  // 改写成数组。防止多个then执行覆写
  this.onResolvedFuction = [];
  this.onRejectedFuction = [];
  // reject函数
  const reject = (data) => {
    // 任务队列
    setTimeout(() => {
      if (this.PromiseState === 'pending') {
        this.PromiseState = 'rejected';
        // 设置对象结果值
        this.PromiseResult = data;

        this.onRejectedFuction.forEach((func) => {
          func(data);
        });
      }
    });
    //    设置状态
  };
  const resolve = (data) => {
    // 增加对promise的判断
    if (data instanceof Promise) {
      return data.then(resolve, reject);
    }
    // 任务队列
    setTimeout(() => {
    // 修改对象的状态
      if (this.PromiseState === 'pending') {
        this.PromiseState = 'fullfilled';
        this.PromiseResult = data;
        this.onResolvedFuction.forEach((func) => {
          func(data);
        });
      }
    });
    // 设置对象结果值
  };
  // 构造函数出错则触发reject
  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}
// 维护健壮性，设定默认值为Function.prototype
// 因为所有promise的then方法逻辑一致，所以放在原型上
Promise.prototype.then = function then(
  onResolved = Function.prototype, onReject = Function.prototype,
) {
  // 判断传入的参数是否符合要求
  onResolved = typeof onResolved === 'function' ? onResolved : (data) => data;
  onReject = typeof onReject === 'function' ? onReject : (error) => { throw error; };
  if (this.PromiseState === 'fullfilled') {
    onResolved(this.PromiseResult);
  }
  if (this.PromiseState === 'rejected') {
    onReject(this.PromiseResult);
  }
  // 先暂时保存状态
  if (this.PromiseState === 'pending') {
    this.onResolvedFuction.push(onResolved);
    this.onRejectedFuction.push(onReject);
  }
};
