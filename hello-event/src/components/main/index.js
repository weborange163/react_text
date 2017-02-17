import React, { Component, PropTypes} from 'react';
import Item from '../item'

import './main.css'
class Main extends Component {
    render() {
        const {todos} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((todo, index) => {
                        const itemProps = {
                            todo,
                            index,
                            sameToCheck: this.props.sameToCheck,
                            btnUpdate: this.props.btnUpdate
                        }
                        return<Item key={index} {...itemProps}/>
                    })
                }


            </ul>
        )
    }
}
Main.propTypes = {
    todos: PropTypes.array.isRequired,
    sameToCheck: PropTypes.func.isRequired,
    btnUpdate: PropTypes.func.isRequired
}
export default Main