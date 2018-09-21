import React, { Component } from 'react';
import './App.css';

import Navbar from './Navbar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {title: "Eric's Portfolio"};
    }
    render() {
        return (
            <main className="App">
                <Navbar name={this.state.title}/>
            </main>
    );
  }
}

export default App;
