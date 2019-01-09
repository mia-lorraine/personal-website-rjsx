import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class aboutMe extends Component {
  render() {
    return (
      <div>
      <Grid>
        <Cell col = {12}>
          <div style = {{textAlign: 'center' }}>
            <img
              src = "https://i.postimg.cc/HxfMHswK/self.jpg"
              alt = "selfie"
             />
              <h2 style = {{paddingTop: '2ems', fontFamily: 'Heebo'}}> About Me </h2>
              <h4 style = {{color: 'grey', fontFamily: 'Heebo'}}> Front-End Developer </h4>
              <hr/>
              <p style = {{ fontSize: '20px', paddingLeft: '15%', paddingRight: '15%', fontFamily: 'Heebo' }}> A charismatic Computer Science undergrad at La Sierra University with passion for creativity, innovation, challenging work environments, and problem solving. Whether I'm working with a team big or small, or working individually, I find joy in working with a purpose; to help shape the future of technology. I want to contribute my skills to the tech community. Although I have foundational knowledge of Objective C and C++, my strengths lie in HTML5, CSS3, and ReactJS. On
              my free time, I play basketball, write my own music, and sing.  </p>
              <hr/>
              </div>
        </Cell>
      </Grid>


      </div>
    );
  }
}
export default aboutMe;
