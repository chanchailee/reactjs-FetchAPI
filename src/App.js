/*
Author: Chanchai Lee
Ref:
Brad Traversy
https://www.youtube.com/watch?v=A71aqufiNtQ&t=
https://github.com/bradtraversy/projectmanager
*/

import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import './App.css';
/*import class from components folder to put in App.js
The class that we import doesn't need .js suffix. We just add only className
In this case, it is Projects*/
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'
import Todos from './Components/Todos';


/*App.js is the main logic page.
It is the gateway of all interactive classes*/
/*Under return , it can return only one element*/
class App extends Component {

  /*Create constructor that store initial state
  inside initial state would store initial variable that we would use in the future*/

  constructor(){
    super();
    this.state = {
      /*Initial state*/
      projects:[],
      todos:[],
      confs:{}

    }
  }

  getProjects(){
    this.setState({
      projects:[
        { id:uuid.v4(),
          title: 'Project1',
          category: 'Category1'
        },
        {
          id:uuid.v4(),
          title: 'Project2',
          category: 'Category2'
        },
        {
          id:uuid.v4(),
          title: 'Project3',
          category: 'Category3'
        }
      ]
    });
  }

  getTodos() {
  $.ajax({
    url:'https://jsonplaceholder.typicode.com/todos',
    dataType:'json',
    cache:false,
    success: function(data) {
      this.setState({
          todos: data
        },
        function() {
          console.log(this.state);
        });
    }.bind(this),
    error: function(xhr, status, err) {
      console.log(err);
    }
  });
}



  /*We would use componentDidMount in case of if we want to fetch data from the API*/
  componentWillMount(){
      this.getProjects();
      this.getTodos();
  }

  /*Fetch Data from the API*/
  componentDidMount(){
      this.getTodos();
  }
  handleAddProject(project){

    let projects = this.state.projects;
    projects.push(project);
    /*Reset the state by using setState()*/
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id ===id);

    /*Delete 1 record from the array where the record contains id*/
    projects.splice(index,1);
    /*Then reset the stage*/
    this.setState({projects:projects});
  }

  handleDeleteTodo(title){
    let todos = this.state.todos;
    let index = todos.findIndex(x => x.title ===title);

    /*Delete 1 record from the array where the record contains id*/
    todos.splice(index,1);
    /*Then reset the stage*/
    this.setState({todos:todos});
  }


  render() {
    return (< div className = "App" >
        {/*
          1.Render AddProject class by using <AddProject />
          2.Call AddProject class and bind projects to addProject object*
          3.this.handleAddProject.bind(this) binds the recently add project to "projects" local ARRAY object by using push() function

        */}
        <AddProject
        addProject={this.handleAddProject.bind(this)}
        />

        {/*
          1.Render Projects class by using <Projects />
          2.Pass "projects" object to Project Class
        */}

        <Projects
        message="This data is come from App.js, pass this message to Project.js"
        projects = {this.state.projects}
        onDelete={this.handleDeleteProject.bind(this)}
        />

        <hr />
        <Todos todos = {this.state.todos}
        onDelete = {this.handleDeleteTodo.bind(this)}/>
        < /div>
    );
  }
}

/*Defautl export class*/
export default App;
