import React, {Component} from 'react';
import './Projects.css';
import Markdown from 'react-markdown';

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {markdown: "# loading"};
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
        return (
            <main>
                <div id={"break"} />
                <article>
                    <section className={"one"}>
                        <h1>RSS FEED READER</h1>
                    </section>
                    <section className={"two"}>
                        <p>
                            Tef
                        </p>
                    </section>
                </article>
                <Markdown source={this.state.markdown}/>
            </main>
        );
    }

}

export default Projects;