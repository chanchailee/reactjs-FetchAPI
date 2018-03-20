/*
Author: Chanchai Lee
Ref:
Brad Traversy
https://www.youtube.com/watch?v=A71aqufiNtQ&t=
https://github.com/bradtraversy/projectmanager
*/
import React, { Component } from 'react';
import TodoItem from './TodoItem';


/*Under return , it can return only one element*/
class Todos extends Component {


  deleteTodo(title){
    this.props.onDelete(title);
  }
  render() {
    let todoItems;

    if(this.props.todos){
        todoItems = this.props.todos.map(todo =>{
            return(
              <TodoItem key={todo.title} todo={todo}
              onDelete={this.deleteTodo.bind(this)}/>
            );
        });
    }


    return (
      <div className = "Todos">
      <h3>Todos</h3>
      {todoItems}
      </div >);
  }
}

export default Todos;
