import React,{Component, PropTypes} from 'react'
import './header.css'
class Header extends Component {
    //头部需要监控enter键up事件,添加并更新state,需要主组件传入函数
    keyUp = (event) => {
        if(event.keyCode===13){
            let text = event.target.value.trim()
            if(text){
                //创建事件对象
                const todo = {
                    text,
                    isDone: false
                }
                this.props.addOne(todo)
                event.target.value = ''
            }
        }
    }
    render(){
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.keyUp} placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
Header.propTypes = {
    addOne: PropTypes.func.isRequired
}
export default Header