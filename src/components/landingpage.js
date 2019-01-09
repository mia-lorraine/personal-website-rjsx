import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div style = {{width: '100%', margin: 'auto'}}>
        <Grid className = "landing-grid">
          <Cell col={12}>
            <img
              src = "https://cdn3.iconfinder.com/data/icons/cute-women/188/SHORT_HAIR-18-512.png"
              alt = "avatar"
              className = "avatar-img"/>

              <div className = 'banner-text'>
              <h1> Mia Lorraine Laurea </h1>
              <hr/>

              <p> Front End Web Developer</p>


              <div className = 'social-links'>
              {/* Linked In */}
              <a href = 'http://google.com' rel='noopener noreferrer' target='_blank'>
              <i className = "fa fa-linkedin-square" area-hidden="true" />
              </a>
              {/* GitHub */}
              <a href = 'http://github.com/mia-lorraine' rel='noopener noreferrer' target='_blank'>
              <i className = "fa fa-github-square" area-hidden="true" />
              </a>



              </div>

              </div>
            </Cell>
          </Grid>
        </div>
    )
  }
}
export default Landing;
