import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, CardMenu, IconButton, Button } from 'react-mdl';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {activeTab: 0}
  }

  toggleCategories(){
    if(this.state.activeTab === 0){
      return(
        <div className = "projects-grid">
        {/*Project 1 */}
        <Card shadow={5} style = {{minWidth: '450', margin: '40px'}}>
          <CardTitle style={{color: '#fff', height: '176px',
          background:'url(http://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >
          React Project #1
          </CardTitle>
          <CardText> This website was built with the intent to help Product Managers track the progress of their products. 
          </CardText>
          <CardActions border>
            <a href='https://github.com/mia-lorraine/portfolio'> GitHub Repository</a>
          </CardActions>
          <CardMenu style = {{color: '#fff'}}>
            <IconButton name="share"/>
            </CardMenu>
          </Card>

          {/*Project 2 */}
          <Card shadow={5} style = {{minWidth: '450', margin: '40px'}}>
            <CardTitle style={{color: '#fff', height: '176px',
            background:'url(http://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >
            React Project #1
            </CardTitle>
            <CardText> 
            </CardText>
            <CardActions border>
              <Button colored> GitHub </Button>
            </CardActions>
            <CardMenu style = {{color: '#fff'}}>
              <IconButton name="share"/>
              </CardMenu>
            </Card>

            {/*Project 3 */}
            <Card shadow={5} style = {{minWidth: '450', margin: '40px'}}>
              <CardTitle style={{color: '#fff', height: '176px',
              background:'url(http://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >
              React Project #1
              </CardTitle>
              <CardText> This project consisted of yada yada yada
              </CardText>
              <CardActions border>
                <Button colored> GitHub </Button>
              </CardActions>
              <CardMenu style = {{color: '#fff'}}>
                <IconButton name="share"/>
                </CardMenu>
              </Card>

              </div>
      )
    } else if(this.state.activeTab === 1){
      return (
        <div><h1> This is project tab 2 </h1></div>
      )
    }
  }


  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab = {this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
        <Tab> React </Tab>
        <Tab> Tab 2 </Tab>
        </Tabs>
          <Grid>
            <Cell col ={12}>
            </Cell>
              <div className = "content">{this.toggleCategories()}</div>
          </Grid>
        </div>
    );
  }
}
export default Projects;
