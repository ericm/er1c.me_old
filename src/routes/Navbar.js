import React, { Component } from 'react';
import './Nav.css';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {val: this.props.name};
    }

    render() {
        return (
            <header id={"navBar"}>
                <h1>{this.state.val}</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                    </ul>
                </nav>
            </header>
        )
    }

}

export default Navbar;