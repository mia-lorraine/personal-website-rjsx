import React, { Component } from 'react';
import laurea_mia2019 from '../laurea_mia2019.svg' ;

class Education extends Component {
  render() {
    return(
      <div><h1>Education</h1>
       <img
              src = {laurea_mia2019}
              alt = "avatar"
              className = "avatar-img"/>
      </div>


    );
  }
}

export default Education;
