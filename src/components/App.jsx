import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar.jsx';
import {BrowserRouter as Router, Route} from  'react-router-dom';

//import routes
import Home from './routes/Home.jsx';
import Projects from './routes/Projects.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {title: "Eric Moynihan"};
    }
    loader = () => {
        document.getElementById("loader").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 1001);
    };

    componentDidMount = () => {

        window.addEventListener("load", this.loader);

    };
    render() {
        document.title = this.state.title;
        return (
            <div className="App">
                <div id={"loader"}>
                    <header>
                        The Best Site is Loading...
                        <div id={"spinner"} />
                    </header>
                </div>
                <Router>
                    <div>
                        <Navbar name={this.state.title}/>

                        <Route exact path={"/"} component={Home} />

                        <Route path={"/projects"} component={Projects}/>
                    </div>
                </Router>

            </div>
        );
    }
}

export default App;