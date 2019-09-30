import React, { Component } from 'react'
import PropType from 'prop-types';

import './item.css';

export class TodoItem extends Component {
    itemStyle = () => {
        return {
            padding: '10px',
            borderBottom: '2px pointed #333',
            color: '#333',
            textTransform: 'capitalize',
            marginLeft: '20px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    chk = () => {
        return {
            display: this.props.todo.completed ? 'none' : 'inline-block',
            paddingRight: '5px'
        }
    }

    render() {
        //destructuring
        const {id, title} = this.props.todo;
        return (
            <div style={this.itemStyle()}>
                <p style={taskDsg}>
                    <input style={this.chk()} type="checkbox" onChange={this.props.marking.bind(this, id)} />{' '}
                {title}
                    <button onClick={this.props.deleteTask.bind(this, id, title)}>x</button>
                </p>
            </div>
        )
    }
}
const taskDsg = {
    color: '#333',
    size: '17px',
    fontFamily: 'Arial, Helvetica, sans-serif',
    textTransform: 'capitalize'

}
// let dltBtn = {
//     backgroundColor: '#fff',
//     color: '#ff0000',
//     borderRadius: '20px',
//     padding: '5px 19px',
//     border: '2px solid #ff0000',
//     float: 'right',
//     cursor: 'pointer'
// }

// propTypes
TodoItem.PropType = {
    todo: PropType.object.isRequired
}

export default TodoItem
