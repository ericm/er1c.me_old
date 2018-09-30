import React, {Component} from 'react';
import './Projects.css';
import Markdown from 'react-markdown';
import Waypoint from "react-waypoint";

class Projects extends Component {



    navEnter = () => {
        document.getElementById("navBar").classList.add("noBack");
    };
    navLeave = () => {
        document.getElementById("navBar").classList.remove("noBack");
    };

    constructor(props) {
        super(props);
        this.state = {markdown: "# loading", title: "Projects - Eric Moynihan"};
    }

    componentDidMount() {
        let file = "https://raw.githubusercontent.com/TooFiveFive/projectsList/master/README.md";
        let rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = () => {
            if(rawFile.readyState === 4) {
                if(rawFile.status === 200 || rawFile.status === 0) {
                    this.setState({markdown: rawFile.responseText});
                }
            }
        };
        rawFile.send(null);
    }

    render() {
        document.title = this.state.title;
        return (
            <main>
                <Waypoint
                    onEnter={this.navEnter}
                    onLeave={this.navLeave}
                />
                <article id={"pr"}>
                    <h1>PROJECTS</h1>
                </article>
                <article id={"md"}>
                    <Markdown source={this.state.markdown}/>
                </article>

            </main>
        );
    }

}

export default Projects;