import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
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
                <Drawer className={"sideBar"}>
                    <ul>
                        <li>Hi</li>
                        <li>Hi</li>
                        <li>Hi</li>
                    </ul>
                </Drawer>
            </main>
    );
  }
}

export default App;
