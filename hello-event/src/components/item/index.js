import React, {Component, PropTypes} from 'react'

import './item.css'
class Item extends Component {
    //定义复选框状态,需要更新state,需要主组件传入函数,需要经过Main传递
    //关于index, Main中遍历数组时,将index传入到item,
    //当点击相应的checkbox时,又将其对应的index作为改变state中状态的依据
    //1,设置checkbox可以更新state
    toggleChecked = (event) => {
        const {sameToCheck, index} = this.props
        sameToCheck(index, event.target.checked)
    }

    //2, 设置删除按钮的显示与隐藏
    showBtn = () => {
      this.refs.btn.style.display = 'block'
    }
    hideBtn = () => {
        this.refs.btn.style.display = 'none'
    }
    //3, 设置删除按钮删除事件并更新state
    btnDel = () => {
        const {index, todo, btnUpdate} = this.props
        if(confirm(`确定要删除${todo.text}吗?`)){
            btnUpdate(index)
        }
    }
    render(){
        const {todo} = this.props
        return (
            <li onMouseEnter={this.showBtn} onMouseLeave={this.hideBtn}>
                <label>
                    <input type="checkbox" checked={todo.isDone} onChange={this.toggleChecked}/>
                    <span>{todo.text}</span>
                </label>
                <button className="btn btn-danger" style={{display: 'none'}} ref="btn" onClick={this.btnDel}>删除</button>
            </li>
        )
    }
}
Item.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    sameToCheck: PropTypes.func.isRequired,
    btnUpdate: PropTypes.func.isRequired
}
export default Item