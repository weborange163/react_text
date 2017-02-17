import React from 'react'
import CommentItem from '../CommentItem'

class CommentList extends React.Component{
render(){
    const {comments, del} = this.props       //解构赋值,读取主组件的内容
    //根据comments是否有值确定<h2>是否显示
    const display = comments.length > 0 ? 'none' : 'block'
    return(
        <div className="col-md-8">
            <h3 className="reply">评论回复：</h3>
            <h2 style={{display: display}}>暂无评论，点击左侧添加评论！！！</h2>
            <ul className="list-group">
                {
                    comments.map((comment, index) => <CommentItem comment={comment} index={index} del={del}/>)
                }

            </ul>
        </div>
    )
}
}
CommentList.propTypes = {
    comments: React.PropTypes.array.isRequired,
    del: React.PropTypes.func.isRequired
}
export default CommentList