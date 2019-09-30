import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/footer';

import Todos from './components/Todos';
import About from './components/pages/About';
import AddTodo from './components/AddTodo';

import uuid from 'uuid';

import './App.css';

class App extends Component {

  // you can delete or edit the todos if you want
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Finish the iron Throne',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'date night',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'morning run',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'take out the trash',
        completed: true
      }
    ]
  }
  // change the boolean of the specified todo
  marking = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if (id === todo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })});
  }
  deleteTask = (id, title) => {
    // the Spread operator " ... " is used to copy the array
    // the filter method will return all the tasks where the id is different from the passed in ID
    // thus filtering out the delted One
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title, 
      completed: false
    }
    // appending the new task to the array after copying it
    this.setState({todos: [...this.state.todos, newTodo]});
  }

  render() {
    // console.log(this.state.todos);
    return(
      <Router>
        <div className="App">
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <div className="container">
                  <AddTodo addTodo={this.addTodo} />
                </div>
                <Todos todos={this.state.todos} marking={this.marking} deleteTask={this.deleteTask} />
                <Footer />
              </React.Fragment>
            )} />
            <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default App;