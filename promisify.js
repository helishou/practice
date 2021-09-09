/*
 * @Author       : helishou
 * @Date         : 2021-09-09 10:05:07
 * @LastEditTime : 2021-09-09 10:44:34
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : d:\desk\sakura\practice\promisify.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
const kCustomPromisifiedSymbol = Symbol('nodejs.util.promisify.custom');
const kCustomPromisifyArgsSymbol = Symbol('customPromisifyArgs');

let validateFunction;

function promisify(original) {
  const argumentNames = original[kCustomPromisifyArgsSymbol];

  function fn(...args) {
    return new Promise((resolve, reject) => {
      ArrayPrototypePush(args, (err, ...values) => {
        if (err) {
          return reject(err);
        }
        if (argumentNames !== undefined && values.length > 1) {
          const obj = {};
          for (let i = 0; i < argumentNames.length; i++)
            obj[argumentNames[i]] = values[i];
          resolve(obj);
        } else {
          resolve(values[0]);
        }
      });
      ReflectApply(original, this, args);
    });
  }

  ObjectSetPrototypeOf(fn, ObjectGetPrototypeOf(original));

  ObjectDefineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return ObjectDefineProperties(
    fn,
    ObjectGetOwnPropertyDescriptors(original)
  );
}

promisify.custom = kCustomPromisifiedSymbol;
// function promisify(fnc,that) {
//     return function (...args) {
//         var that=that||this
//         return new Promise((resolve, reject) => {
//             fnc.call(that, ...args, (err, res) => {
//                 if (err) {
//                     reject(err)
//                 } else {
//                     resolve(res)
//                 }
//             })
//         })
//     }
// }
const fn=(item)=>console.log(item)
const fn2=promisify(fn)
fn2(333333).then()