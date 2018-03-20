/*
Author: Chanchai Lee
Ref:
Brad Traversy
https://www.youtube.com/watch?v=A71aqufiNtQ&t=
https://github.com/bradtraversy/projectmanager
*/
import React from 'react';
import ReactDOM from 'react-dom';
/* import class that we want to use and render on index.html (In this case, index.html
interact with index.js. Thus we insert class to index.js instead. Then it would automatically render on index.html by inserting data to the element that we want to render )*/
import App from './App';

// Use Class App and put in <div id="root"> inside index.html
ReactDOM.render(
  <App />,
  document.getElementById('root'));
