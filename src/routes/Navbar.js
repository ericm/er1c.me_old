import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import './Nav.css';

let sided = false;

let toggleSide = () => {

    if (!sided) {
        document.getElementById("navToggle").classList += " sided";
        sided = true;
    } else {
        document.getElementById("navToggle").classList.remove("sided");
        sided = false;
    }

};

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {val: this.props.name};
    }

    render() {
        return (
            <AppBar id={"navBar"}>
                <h1>{this.state.val}</h1>
                <div onClick={toggleSide} id={"navToggle"}>
                    <div className={"toggleBar tb1"} />
                    <div className={"toggleBar tb2"} />
                    <div className={"toggleBar tb3"} />
                </div>
            </AppBar>
        )
    }

}

export default Navbar;

/*<nav id={"sideNav"}>
                        <ul>
                            <li><a href="/">Home</a></li>
                        </ul>
                    </nav>*/