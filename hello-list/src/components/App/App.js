import React from 'react';

import CommentAdd from '../CommentAdd';     //默认加载文件夹中的index文件

import CommentList from '../CommentList'

class App extends React.Component {
  constructor(props){
      super(props)
      //初始化状态
      this.state = {
          comments:[
              {
                  user: '张三',
                  text: '太难了...'
              },
              {
                  user: '大神111',
                  text: 'so easy'
              }
          ]

      }
  }
    add = (commment) => {
      const comments = this.state.comments
      comments.unshift(commment)
      this.setState({comments})
  }
  del = (index) => {
    const comments = this.state.comments
      //删除指定的下标
      comments.splice(index, 1)
      this.setState({comments})
  }
  render(){
      return(
          <div>
              <header className="site-header jumbotron">
                  <div className="container">
                      <div className="row">
                          <div className="col-xs-12">
                              <h1>请发表对React的评论</h1>
                          </div>
                      </div>
                  </div>
              </header>
              <div className="container">
                  <CommentAdd add={this.add}/>
                  <CommentList comments={this.state.comments} del={this.del}/>


              </div>
          </div>

      )
  }
}



export default App;
