import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropType from 'prop-types';

class Todos extends Component {
    render() {
        // console.log(this.props.todos);
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} marking={this.props.marking} deleteTask={this.props.deleteTask}/>
        ));
    }
}
//protypes
Todos.PropType = {
    todos: PropType.array.isRequired
}

export default Todos;