import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar.jsx';

//import routes
import Home from './routes/Home.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {title: "Eric Moynihan"};
    }
    render() {
        document.title = this.state.title;
        return (
            <div className="App">
                <Navbar name={this.state.title}/>
                <Home />
            </div>
        );
    }
}

export default App;
