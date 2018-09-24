import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {

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
        return (
            <main>
                <div id={"loader"}>
                    <header>
                        The Best Site is Loading...
                        <div id={"spinner"} />
                    </header>
                </div>
            </main>
        );
    }

}

export default Projects;