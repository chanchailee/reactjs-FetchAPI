/*
Author: Chanchai Lee
Ref:
Brad Traversy
https://www.youtube.com/watch?v=A71aqufiNtQ&t=
https://github.com/bradtraversy/projectmanager
*/
import React, { Component } from 'react';


/*Under return , it can return only one element*/
class TodoItem extends Component {

  deleteTodo(title){
    this.props.onDelete(title);
  }


  render() {

    return (< li className = "Todo" >

        <strong>{this.props.todo.title}</strong>: {this.props.todo.completed}
        {/*Delete button*/}
        <input type='button' value='Delete' onClick= {this.deleteTodo.bind(this,this.props.todo.title)}/>
     < /li>
    );
  }
}

export default TodoItem;
