import React, {Component} from 'react';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import TodoContainer from '../containers/todo';
import HomeContainer from '../containers/home';
import AboutContainer from '../containers/about';

export default class Routing extends Component{
    render(){
        return(
            <Router>
                <div>
                    {/* <Link to="/home">Home</Link> <br />
                    <Link to="/about">About</Link> <br />
                    <Link to="/">Todo</Link> <br /> */}


                    <Route  path="/home" component={HomeContainer}/>
                    <Route  path="/about" component={AboutContainer}/>
                    <Route exact path="/" component={TodoContainer}/>
                </div>
            </Router>
        )
    }
}
