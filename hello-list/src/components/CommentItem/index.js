import React from 'react'
class CommentItem extends React.Component{
    delItem = () => {
        const {comment, del, index} = this.props
        if(confirm(`确定删除${comment.user}的评论吗`)){
            del(index)
        }
    }

    render(){
        const {comment} = this.props
        return(
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.delItem}>删除</a>
                </div>
                <p className="user"><span >{comment.user}</span><span>说:</span></p>
                <p className="centence">{comment.text}</p>
            </li>
        )
    }
}
CommentItem.propTypes = {
    comment: React.PropTypes.object.isRequired,
    del: React.PropTypes.func.isRequired,
    index: React.PropTypes.number.isRequired
}
export default CommentItem