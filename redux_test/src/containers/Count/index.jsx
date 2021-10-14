import React, { Component } from "react";
import {
  increment,
  decrement,
  incrementAsync,
} from "../../redux/actions/count";
import { connect } from "react-redux";
class count extends Component {
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
    this.props.increment(value * 1);
  };

  incrementAsync = () => {
    //用户代码片段
    const { value } = this.selectedNumber;
    console.log(231);
    this.props.incrementAsync(value * 1, 500);
    //    this.setState({count:count+value*1})
  };

  incrementIfOdd = () => {
    //用户代码片段
    const { value } = this.selectedNumber;
    const count = this.props.count;
    if (count % 2 !== 0) {
      this.props.increment(value * 1);
    }
  };

  decrement = () => {
    //减法
    const { value } = this.selectedNumber;
    this.props.decrement(value * 1);
  };

  render() {
    // console.log('UI组件接受到的props是',this.props)
    return (
      <div>
        <h1>
          当前求和为:{this.props.count},下方组件总人数为:{this.props.renshu}
        </h1>
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

//返回的是一个对象
// 返回对象中的key 就作为传递给 ui组件props 的key,value就作为传递给ui组件
//传递状态
// ..返回的是一个对象
//返回对象的key作为传给ui的key,返回的是操作方法

//创建并暴露一个Count的容器组件
export default connect(
  (state) => ({ count: state.count, renshu: state.person.length }),
  { increment, decrement, incrementAsync }
)(count);
