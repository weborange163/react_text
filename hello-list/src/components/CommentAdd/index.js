
import React from 'react'
class CommentAdd extends React.Component{
    constructor(props){
        super(props)
        //要想更新数据,就要更新state
        //state的值与input的value值一致,实现自动收集
        this.state = {
            user: ''
        }
    }
    setUser = (event) => {
        const user = event.target.value
        this.setState({user})
    }
    submit = () => {
        //创建评论对象
        const text = this.refs.content.value.trim()
        if(!text || !this.state.user){return}
        const comment = {
            user: this.state.user,
            text: text
        }
        //添加到comments中,添加需要读取到父组件传入函数,通过参数传给父组件
        this.props.add(comment)
        //清除输入的数据
        this.setState({
            user: ''
        })
        this.refs.content.value = ''

    }
    render(){
        return(
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名"
                              value={this.state.user} onChange={this.setUser}/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容"
                        ref = "content"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.submit}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
CommentAdd.propTypes = {
    add: React.PropTypes.func.isRequired
}
export default CommentAdd