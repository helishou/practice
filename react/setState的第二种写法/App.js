/*
 * @Author       : helishou
 * @Date         : 2021-02-27 18:00:55
 * @LastEditTime : 2021-07-01 19:51:48
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \App.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import React, { Component } from 'react'

export default class App extends Component {
  state={count:0}
  add=()=>{
    //对象式的setState
    // //获取原来count 
    // const {count} = this.state
    // //异步调用
    // this.setState({count:count+1},()=>{
    //   console.log('回调函数',this.state.count);
    // })
    // console.log(this.state.count);

    //函数式,依赖于原状态的推荐使用
    this.setState((state,props)=>{
      return {count:state.count+1}
    })
    
  }
  alert=()=>{
    //对象式的setState
    // //获取原来count 
    // const {count} = this.state
    // //异步调用
    // this.setState({count:count+1},()=>{
    //   console.log('回调函数',this.state.count);
    // })
    // console.log(this.state.count);

    //函数式,依赖于原状态的推荐使用
    setTimeout(()=>{
      // alert 只能获取到点击按钮时的那个状态
      alert(this.state.count);
    },3000);
    
  }
  render() {
    return (
      <div>
        <h1>当前求和为 {this.state.count}</h1>
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.add}>点我+1</button>
      </div>
    )
  }
}
