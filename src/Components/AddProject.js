/*
Author: Chanchai Lee
Ref:
Brad Traversy
https://www.youtube.com/watch?v=A71aqufiNtQ&t=
https://github.com/bradtraversy/projectmanager
*/
import React, { Component } from 'react';
import uuid from 'uuid';

/*Under return , it can return only one element*/
class AddProject extends Component {

  constructor(){
    super();
    this.state = {

      newProject:{}
    }
  }
  static defaultProps = {
    categories : ['Category1','Category2','Category3']
  }


  handleSubmit(e){

    if(this.refs.title.value ===''){
      alert('Title is required');
      /*alert might not need because we put "required" inside <input /> html5 tag already*/
    }
    else{
      this.setState({
        newProject:{
          id:uuid.v4(),
          title: this.refs.title.value,
          category: this.refs.category.value
        }
      },
      function(){
        //console.log(this.state
        this.props.addProject(this.state.newProject);
      }
    );
    }

    /*Prevent Default Value */
    e.preventDefault();
  }
  render() {

    let categoryOptions = this.props.categories.map(category=>{
      return <option key = {category} value={category}>{category}</option>
    });


    return (
      <div >
        <h3>Add Project </h3>
        <hr />
        <form onSubmit = {this.handleSubmit.bind(this)}>
          <div>
            <label>Title: </label> <input type="text" ref="title" required/>
            <br />
            <br />
          </div>
          <div>

            <label>Category: </label>
            <select ref="category">

              {categoryOptions}
             </select>

          </div>
          <br />
          <input type = "submit" value="Submit" />
        </form>
        <hr />
      </div >);
  }
}
/*Export Default Class*/
export default AddProject;
