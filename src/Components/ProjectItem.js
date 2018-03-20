/*
Author: Chanchai Lee
Ref:
Brad Traversy
https://www.youtube.com/watch?v=A71aqufiNtQ&t=
https://github.com/bradtraversy/projectmanager
*/
import React, { Component } from 'react';


/*Under return , it can return only one element*/
class ProjectItem extends Component {

  deleteProject(id){
    this.props.onDelete(id);
  }


  render() {

    return (< li className = "Project" >

        <strong>{this.props.project.title}</strong>: {this.props.project.category}
        {/*Delete button*/}

        {/*<a href ="#" onClick= {this.deleteProject.bind(this)}>X</a>*/}
        <input type='button' value='Delete' onClick= {this.deleteProject.bind(this,this.props.project.id)}/>
     < /li>
    );
  }
}

export default ProjectItem;
