/*
Author: Chanchai Lee
Ref:
Brad Traversy
https://www.youtube.com/watch?v=A71aqufiNtQ&t=
https://github.com/bradtraversy/projectmanager
*/
import React, { Component } from 'react';
import ProjectItem from './ProjectItem';


/*Under return , it can return only one element*/
class Projects extends Component {


  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
    let projectItems;

    /*Check whether there is any item inside this.props.projects*/
    if(this.props.projects){
        projectItems = this.props.projects.map(project =>{
            // console.log(project);
            // map data that it received from App.js and passes it to ProjectItem.js
            return(
              <ProjectItem key = {project.id} project={project}
              onDelete={this.deleteProject.bind(this)}/>
            );
        });
    }


    return (
      <div className = "Projects">
      <h3>Latest Project</h3>
      {projectItems}
      </div >);
  }
}






export default Projects;
