import React, { Component } from 'react';
import Header from '../header'
import Main from '../main'
import Footer from '../footer'

import './App.css';

class App extends Component {
    constructor(props){
        super(props)
        //初始化状态
        this.state = {
            todos: [
                {text: '做卫生', isDone: false},
                {text: '做作业', isDone: false}
            ]
        }
    }
    //1, 通过enter keyUp添加一个事件
    addOne = (todo) => {
        const todos = this.state.todos
        todos.unshift(todo)
        this.setState({todos})
    }
    //2, 设置state状态随checkbox改变
    sameToCheck = (index, isDone) => {
        const todos = this.state.todos
        todos[index].isDone = isDone
        this.setState({todos})
    }
    //3, 设置btn删除更新state
    btnUpdate = (index) => {
       const todos = this.state.todos
        todos.splice(index, 1)
        this.setState({todos})
    }
    //4,设置底部btn可以同步更新所有state
    updateAll = (isDone) => {
        const todos = this.state.todos
        todos.map(todo => todo.isDone=isDone)
        this.setState({todos})
    }
    //5, 底部按钮操作删除所有选中的按钮
    getUnDoneTodos = () => {
        return this.state.todos.filter(todo => !todo.isDone)
    }
    delAllChecked = () => {
        alert('???')
        let todos = this.state.todos
        todos = todos.filter(todo => !todo.isDone)
        this.setState({todos})
    }

  render() {
      //4, Footer需要的数据
      const footerProps = {
          allNum: this.state.todos.length,
          checkedBox: this.state.todos.filter(todo => todo.isDone).length,
          updateAll: this.updateAll,
          todos: this.state.todos,
          delAllChecked: this.delAllChecked
      }
    return (

        <div className="todo-container">
            <div className="todo-wrap">
                <Header addOne={this.addOne}/>
                <Main todos={this.state.todos} sameToCheck={this.sameToCheck} btnUpdate={this.btnUpdate}/>
                <Footer {...footerProps}/>
            </div>
        </div>
    );
  }
}



export default App;
