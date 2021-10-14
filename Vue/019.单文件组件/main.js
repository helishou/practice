/*
 * @Author       : helishou
 * @Date         : 2021-10-15 00:38:34
 * @LastEditTime : 2021-10-15 00:40:40
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \Vue\019.单文件组件\main.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import School from './School.Vue'
new Vue({
    el:'#root',
    template:`<School/>`,
    component:{
        School
    }
})