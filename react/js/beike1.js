/*
 * @Author       : helishou
 * @Date         : 2021-08-13 21:18:39
 * @LastEditTime : 2021-08-13 21:53:10
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : f:\桌面\front do\Webpack进阶\js\beike1.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
console.time('method3')
function wurenjiSolve(n, m) {
  if (n == 1) {
    return [m];
  }
  let s=~~(m/(2*n-2))
  let res = new Array(n).fill(2*s);
  res[0]=s
  res[n-1]=s
  let direction = -1;
  let j = 0;
  // let te=m-s*(2*n-2)
    for (let i=0;i < m-s*(2*n-2);i++ ) {
    if (j==0||j==n-1) {
      direction = -direction;
    }
    res[j]++;
    j += direction;
  }
  return res;
}

console.log(wurenjiSolve(700000,14445444))
console.timeEnd('method3')