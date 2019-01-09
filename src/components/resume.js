import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
// import Education from './education';

class Resume extends Component {
  render() {
    return (
      <div>
      <Grid>
        <Cell col = {12}>
          <div style = {{textAlign: 'center'}}>
            <img
              src = ""
              alt = "selfie"
              style = {{height: '200px', float: 'right'}}/>
              <h2 style = {{paddingTop: '2ems'}}> Mia Laurea </h2>
              <h4 style = {{color: 'grey'}}> Front-End Developer </h4>
              <hr style = {{borderTop: '3px solid #833fb2',width: '15%'}}/>
              <p> A charismatic Computer Science undergrad at La Sierra University with passion for creativity, innovation, challenging work environments, and problem solving. Whether I'm working with a team big or small, or working individually, I find joy in working with a purpose; to help shape the future of technology. I want to contribute my skills to the tech community. Although I have foundational knowledge of Objective C and C++, my strengths lie in HTML5, CSS3, and ReactJS.   </p>
              <hr style = {{borderTop: '3px solid #833fb2', width: '15%'}}/>
              <h5> Skills </h5>
                <p> 316 Gateway Drive Pacifica, CA 94044 </p>
                <hr style = {{borderTop: '3px solid #833fb2', width: '15%'}}/>
                </div>
        </Cell>
    
      </Grid>


      </div>
    );
  }
}
export default Resume;
