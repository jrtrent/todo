import React, { Component } from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import TodoForm from './components/TodoForm';
import {Container, Row, Col} from "./components/Grid";

class App extends Component {
  state = {
    myTodos: []
  };

  addTodo = text => {
    const todo = {
      isDone: false,
      text
    };
    this.setState({
      myTodos:[...this.state.myTodos, todo]
    });
  };

  updateTodoStatus =text => {
    const idx = this.state.myTodos.findIndex(todo =>todo.text ===text);
    const todo = this.state.myTodos[idx];
    this.setState({
      myTodos: [
        ...this.state.myTodos.slice(0, idx),
        {text, isDone: !todo.isDone},
        ...this.state.myTodos.slice(idx + 1)

      ]
    });
  };

  

  render() {
    return (
      <div>
        <Container fluid>
          <Col size="sm-4 md=6">
            <Row>
              <TodoForm addTodo={this.addTodo} />
            </Row>
            <Row>
              <TodoList
              myTodos={this.state.myTodos}
              updateTodoStatus={this.updateTodoStatus}
            />
          </Row>
          </Col>
      </Container>
      </div>
    );
  }
}

 

export default App;
