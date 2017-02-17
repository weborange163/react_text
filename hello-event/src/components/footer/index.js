import React, {Component, PropTypes} from 'react'
import './footer.css'

class Footer extends Component{
    //1, 同步底部按钮
    syncBtn = (event) => {
        const {updateAll} = this.props
        updateAll(event.target.checked)
    }
    //2, 当没有选中

    render(){
        const {checkedBox, allNum, delAllChecked} = this.props
        //当选中的和总数相等切且不为0时,底部btn被选中
        let isAllChecked = checkedBox===allNum && allNum>0
        //定义底部的button是否显示
        const display = checkedBox===0 ? 'none' : 'block'
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={isAllChecked} onChange={this.syncBtn} ref="footBtn" />
                </label>
                <span>
          <span>已完成{checkedBox}</span> / 全部{allNum}
        </span>
                <button className="btn btn-danger" style={{display: display}} onClick={delAllChecked}>清除已完成任务</button>
            </div>
        )
    }
}
Footer.propTypes = {
    checkedBox: PropTypes.number.isRequired,
    allNum: PropTypes.number.isRequired,
    updateAll: PropTypes.func.isRequired,
    delAllChecked: PropTypes.func.isRequired

}
export default Footer