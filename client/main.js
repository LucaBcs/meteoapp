import { Meteor } from 'meteor/meteor';
//import Meteor library
import React from 'react';
//import React library
import { render } from 'react-dom';
//import the render function from react-dom
import App from '../imports/App';

Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});
