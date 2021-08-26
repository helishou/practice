/* eslint-disable func-names */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/*
 * @Author       : helishou
 * @Date         : 2021-05-19 00:25:57
 * @LastEditTime : 2021-08-17 20:40:38
 * @LastEditors  : helishou
 * @Description  : 最终版，实现promise静态方法和其他方法
 * @FilePath     : \插曲-Promise实现\src\promise.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
const resolvePromise = (promise2, result, resolve, reject) => {
  // result 和 promise 相等时候，onResolve返回promise2时候，执行reject
  if (result === promise2) {
    reject(new TypeError('error due to circular reference'));
  }
  // 判断是否执行过onreject或者onresolve
  let consumed = false;
  // 判断有无then属性方法，有的话就是thenable
  let thenable;
  // eslint-disable-next-line no-use-before-define
  if (result instanceof Promise) {
    if (result.PromiseState === 'pending') {
      result.then((data) => {
        resolvePromise(promise2, data, resolve, reject);
      }, reject);
    } else {
      result.then(resolve, reject);
    }
    return undefined;
  }
  const isComplexResult = (target) => (typeof target === 'function' || typeof target === 'object')
  && (target !== null);

  // 如果返回疑似Promise类型
  if (isComplexResult(result)) {
    try {
      thenable = result.then;
      if (typeof thenable === 'function') {
        thenable.call(result, (data) => {
          if (consumed) {
            return;
          }
          consumed = true;
          // 递归调用，直到不是一个promise对象
          return resolvePromise(promise2, data, resolve, reject);
        }, (error) => {
          if (consumed) {
            return;
          }
          consumed = true;
          return reject(error);
        });
      } else {
        resolve(result);
      }
    } catch (e) {
      if (consumed) {
        return;
      }
      consumed = true;
      return reject(e);
    }
  } else {
    // 不是promise，直接返回
    resolve(result);
  }
};
function Promise(executor) {
  console.log('我是自定义的promise4');
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
Promise.prototype.then = function (
  onResolved = Function.prototype, onReject = Function.prototype,
) {
  // 判断传入的参数是否符合要求
  onResolved = typeof onResolved === 'function' ? onResolved : (data) => data;
  onReject = typeof onReject === 'function' ? onReject : (error) => { throw error; };
  // 将promise2返回
  let promise2;
  if (this.PromiseState === 'fullfilled') {
    promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = onResolved(this.PromiseResult);
        resolvePromise(promise2, result, resolve, reject);
        // resolve(result);
      });
    });
    return promise2;
  }
  if (this.PromiseState === 'rejected') {
    promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = onReject(this.PromiseResult);
        resolvePromise(promise2, result, resolve, reject);
        // reject(result);
      });
    });
    return promise2;
  }
  // 先暂时保存状态p103
  if (this.PromiseState === 'pending') {
    promise2 = new Promise((resolve, reject) => {
      this.onResolvedFuction.push(() => {
        setTimeout(() => {
          try {
            const result = onResolved(this.PromiseResult);
            // resolve(result);
            resolvePromise(promise2, result, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      });
      this.onRejectedFuction.push(() => {
        setTimeout(() => {
          try {
            const result = onReject(this.PromiseResult);
            // resolve(result);
            resolvePromise(promise2, result, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      });
    });
    return promise2;
  }
};

Promise.prototype.catch = function (catchFunc) {
  return this.then(null, catchFunc);
};
Promise.prototype.finally = function (finallyFunc) {
  finallyFunc()
  return this;
};

Promise.resolve = function (value) {
  return new Promise((resolve, reject) => {
    resolve(value);
  });
};

Promise.reject = function (value) {
  return new Promise((resolve, reject) => {
    reject(value);
  });
};

Promise.all = function (promiseArray) {
  if (!Array.isArray(promiseArray)) {
    throw new TypeError('The arguments must be array!');
  }
  return new Promise((resolve, reject) => {
    try {
      const resultArray = [];
      const { length } = promiseArray;
      for (let i = 0; i < length; i++) {
        promiseArray[i].then((data) => {
          resultArray.push(data);
          //全部执行完，返回array
          if (resultArray.length === length) {
            resolve(resultArray);
          }
        }, reject);
      }
    } catch (e) {
      reject(e);
    }
  });
};
Promise.race = function (promiseArray) {
  if (!Array.isArray(promiseArray)) {
    throw new TypeError('The arguments must be array!');
  }
  return new Promise((resolve, reject) => {
    try {
      const { length } = promiseArray;
      for (let i = 0; i < length; i += 1) {
        promiseArray[i].then(
          resolve,
          reject,
        );
      }
    } catch (e) {
      reject(e);
    }
  });
};
Promise.allSettled = function(promiseArr) {
  let result = []
      
  return new Promise((resolve, reject) => {
      promiseArr.forEach((p, i) => {
          Promise.resolve(p).then(val => {
              result.push({
                  status: 'fulfilled',
                  value: val
              })
              if (result.length === promiseArr.length) {
                  resolve(result) 
              }
          }, err => {
              result.push({
                  status: 'rejected',
                  reason: err
              })
              if (result.length === promiseArr.length) {
                  resolve(result) 
              }
          })
      })  
  })   
}
Promise.any = function(promiseArr) {
  let index = 0
  return new Promise((resolve, reject) => {
      if (promiseArr.length === 0) return 
      promiseArr.forEach((p, i) => {
          Promise.resolve(p).then(val => {
              resolve(val)
              
          }, err => {
              index++
              if (index === promiseArr.length) {
                reject(new AggregateError('All promises were rejected'))
              }
          })
      })
  })
}

