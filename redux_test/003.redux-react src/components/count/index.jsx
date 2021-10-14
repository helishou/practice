
import React, { Component } from "react";
import store from "../../redux/store";
export default class count extends Component {
  // state ={count:0}
  // componentDidMount() {
  //     store.subscribe(()=>{
  //     //console
  //         this.setState({})
  //     })
  // }
  increment = () => {
    //用户代码片段
    const { value } = this.selectedNumber;
    //    const {count} = this.state
    //    this.setState({count:count+value*1})
    // store.dispatch(createIncrementAction(value * 1));
    this.props.jia(value*1)
  };

  incrementAsync = () => {
    //用户代码片段
    const { value } = this.selectedNumber;
    console.log(231)
    this.props.yibujia(value*1,500)
    //    this.setState({count:count+value*1})
  };

  incrementIfOdd = () => {
    //用户代码片段
    const { value } = this.selectedNumber;
    const count = store.getState();
    if (count % 2 !== 0) {
      this.props.jia(value*1)
    }
  };

  decrement = () => {
    //减法
    const { value } = this.selectedNumber;
    this.props.jian(value*1);
  };

  render() {
    // console.log('UI组件接受到的props是',this.props)
    return (
      <div>
        <h1>当前求和为:{this.props.count}</h1>
        <select ref={(c) => (this.selectedNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>加</button>
        <button onClick={this.decrement}>减</button>
        <button onClick={this.incrementIfOdd}>当前奇数加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}
