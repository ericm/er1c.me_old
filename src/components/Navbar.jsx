import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import './Nav.css';
import Drawer from "@material-ui/core/Drawer/Drawer";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {val: this.props.name, open: false};
    }

    toggleDrawer = () => {
        if (!this.state.open) {
            document.getElementById("navToggle").classList.add("sided");
        } else {
            document.getElementById("navToggle").classList.remove("sided");
        }
        this.setState({
            open: !this.state.open
        });
    };

    render() {
        return (
            <div>
                <AppBar id={"navBar"}>
                    <div id={"navHead"}>
                        <h1>{this.state.val}</h1>
                        <div onClick={this.toggleDrawer} id={"navToggle"}>
                            <div className={"toggleBar tb1"} />
                            <div className={"toggleBar tb2"} />
                            <div className={"toggleBar tb3"} />
                        </div>
                    </div>

                </AppBar>
                <Drawer classes={{ paper: 'drawerPaper',}} open={this.state.open} onClose={this.toggleDrawer} className={"sideBar"}>
                    <List className={"sideList"} component="nav">
                        <ListItem button component="a" href="/">
                            <ListItemText className={"navLi"} primary="Home"/>
                        </ListItem>
                        <ListItem button component="a" href="/#about">
                            <ListItemText className={"navLi"} primary="About Me" />
                        </ListItem>
                        <ListItem button component="a" href="projects">
                            <ListItemText className={"navLi"} primary="Projects" />
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        )
    }

}

export default Navbar;
