import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main';


class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
          <Header className = "header-color" scroll>
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content">
              </div>
              <Main/>
          </Content>

      </Layout>
  </div>
    );
  }
}

export default App;
