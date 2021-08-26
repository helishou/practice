"use strict";

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * @Author       : helishou
 * @Date         : 2021-08-07 23:07:41
 * @LastEditTime : 2021-08-16 00:48:35
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \babel\class.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
var A = function A() {
    _classCallCheck(this, A);

    this.a = 1;
};

A.prototype.constructor = function () {
    this.a = 2;
};

var B = function (_A) {
    _inherits(B, _A);

    function B() {
        _classCallCheck(this, B);

        var _this = _possibleConstructorReturn(this, (B.__proto__ || Object.getPrototypeOf(B)).call(this));

        console.log(_this.a);
        A.prototype.constructor.call(_this);
        console.log(_this.a);
        return _this;
    }

    return B;
}(A);

new B();
// babel src --out-dir dist