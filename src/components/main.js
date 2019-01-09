import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Landing from './landingpage';
import aboutMe from './aboutme';
import Contact from './contact';


const Main = () =>  (
    <Switch>
    <Route exact path = "/" component = {Landing} />
    <Route exact path = "/aboutme" component = {aboutMe} />
    <Route exact path = "/contact" component = {Contact}/>
    </Switch>
  )


export default Main;
