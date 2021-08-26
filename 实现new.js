/*
 * @Author       : helishou
 * @Date         : 2021-08-08 23:10:41
 * @LastEditTime : 2021-08-08 23:11:03
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : f:\桌面\front do\Webpack进阶\插曲-测试\实现new.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
function objectFactory() {
    var obj = new Object()
    Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    var ret = Constructor.apply(obj, arguments);
    return Object(ret) ===  ret ?ret : obj;
};
