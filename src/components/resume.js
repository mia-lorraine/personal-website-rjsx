import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';

class Resume extends Component {
  render() {
    return (
      <div>
      <Grid>
        <Cell col = {4}>
          <div style = {{textAlign: 'center'}}>
            <img
              src = ""
              alt = "selfie"
              style = {{height: '200px'}}/>
              </div>
              <h2 style = {{paddingTop: '2ems'}}> Mia Laurea </h2>
              <h4 style = {{color: 'grey'}}> Front-End Developer </h4>
              <hr style = {{borderTop: '3px solid #833fb2', width: '15%'}}/>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
              <hr style = {{borderTop: '3px solid #833fb2', width: '15%'}}/>
              <h5> Address </h5>
                <p> 316 Gateway Drive Pacifica, CA 94044 </p>
                <h5>Phone</h5>
                <p> (650) 701-5190</p>
                <h5>Email</h5>
                <p> mlau863@lasierra.edu </p>
                <hr style = {{borderTop: '3px solid #833fb2', width: '15%'}}/>
        </Cell>
        <Cell className = "resume-right-col" col = {8}>
        <h2 style = {{color:''}}> <Education/> </h2>
        </Cell>
      </Grid>


      </div>
    );
  }
}
export default Resume;
