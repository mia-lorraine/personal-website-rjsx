import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
  render() {
    return (<div className="contact-body">
      <Grid className="contact-grid">
        <Cell col={6}>
          <h2>
            Contact Me
          </h2>
          <hr/>

          <div className = "contact-list">
          <List>
            <ListItem>
              <ListItemContent style = {{fontSize: '30px', fontFamily: 'Heebo'}}>
              <i className = "fa fa-phone-square" aria-hidden="true" />
              (650) 701-5190
              </ListItemContent>
            </ListItem>

            <ListItem>
              <ListItemContent style = {{fontSize: '25px', fontFamily: 'Heebo'}}>
              <i className = "fa fa-envelope" aria-hidden="true" />
              mlau863@lasierra.edu
              </ListItemContent>
            </ListItem>

            <ListItem>
              <ListItemContent style = {{fontSize: '25px', fontFamily: 'Heebo'}}>
              <i className = "fa fa-home" aria-hidden="true" />
              316 Gateway Drive Pacifica 94044
              </ListItemContent>
            </ListItem>

          </List>
          </div>
        </Cell>
      </Grid>

    </div>);
  }
}
export default Contact;
