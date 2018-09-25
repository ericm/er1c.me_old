import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import { Parallax } from 'react-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor'
import "animate.css/animate.min.css";
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {

    navEnter = () => {
        document.getElementById("navBar").classList.add("noBack");
    };
    navLeave = () => {
        document.getElementById("navBar").classList.remove("noBack");
    };

    render() {

        return (
            <main>
                <div id={"parallax"}>
                    <Parallax
                        bgImage={require('../imgs/disp/l1.png')}
                        strength={0}
                    >
                        <Parallax
                            bgImage={require('../imgs/disp/l2.png')}
                            strength={900}
                        >
                            <Parallax
                                bgImage={require('../imgs/disp/l3.png')}
                                strength={600}
                            >
                                <Parallax
                                    bgImage={require('../imgs/disp/l4.png')}
                                    strength={200}
                                >
                                    <Parallax
                                        bgImage={require('../imgs/disp/l5.png')}
                                        strength={1}
                                    >
                                        <div id="parD" style={{ height: '90vh' }} >
                                            <h1><b>Eric Moynihan</b> is creating:</h1>
                                            <ul>
                                                <li>Websites | </li>
                                                <li>Webapps | </li>
                                                <li>Software | </li>
                                                <li>Graphics</li>
                                            </ul>
                                            <div id={"underline"} />
                                        </div>
                                    </Parallax>
                                </Parallax>
                            </Parallax>
                        </Parallax>
                    </Parallax>
                </div>
                <Waypoint
                    onEnter={this.navEnter}
                    onLeave={this.navLeave}
                />
                <ScrollableAnchor id={'about'} >
                    <p>

                    </p>
                </ScrollableAnchor>
                <Parallax bgImage={require('../imgs/cliff1.jpg')}
                          strength={300}
                          className={"view"}>
                    <ScrollAnimation animateIn={"fadeIn"} className={"viewLeft oneL"}>
                        <h2>&lt; ABOUT ME /></h2>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={"fadeInRight"} className={"viewRight oneR"}>
                        <span className="text">I'm an Irish <span aria-label={"flag"} role={"img"}>🇮🇪</span> CS Student currently studying <a href={"http://ucc.ie"} target={"_blank"} className={"link"}>@ UCC</a><br />
                        I work on projects regularly so make sure to check them out.</span>
                    </ScrollAnimation>
                </Parallax>
                <Parallax bgImage={require('../imgs/blue.jpg')}
                          strength={300}
                          className={"view"}>
                    <ScrollAnimation animateIn={"fadeInLeft"} className={"viewLeft twoL"}>
                        <span className="text"><a href={"https://github.com/TooFiveFive"} target={"_blank"} ><img alt={""} src={require("../imgs/GitHub-Mark-Light-64px.png")}/></a> <a href={"https://dribbble.com/TooFiveFive"} target={"_blank"} ><img alt={""} src={require("../imgs/dribbble-ball-mark.svg")}/></a>
                        <a href={"mailto:mail@er1c.me"} target={"_blank"} ><img alt={""} src={require("../imgs/(at).svg")}/></a></span>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={"fadeIn"} className={"viewRight twoR"}>
                        <h2>&lt; SOCIAL LINKS /></h2>
                    </ScrollAnimation>
                </Parallax>
                <Parallax bgImage={require('../imgs/mnt.jpg')}
                          strength={300}
                          className={"view"}>
                    <ScrollAnimation animateIn={"fadeIn"} className={"viewLeft threeL"}>
                        <h2>&lt; WHAT I DO /></h2>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={"fadeInRight"} className={"viewRight threeR"}>
                        <span className="text t3">I make both personal and commercial products using many technologies such as: <br />
                            <a href={"https://nodejs.org/en/"} target={"_blank"} className={"link"}>Node.js, </a>
                            <a href={"https://angular.io"} target={"_blank"} className={"link"}>Angular, </a>
                            <a href={"https://reactjs.org/"} target={"_blank"} className={"link"}>React, </a>
                            <a href={"https://electronjs.org/"} target={"_blank"} className={"link"}>Electron, </a>
                            <a href={"https://golang.org/"} target={"_blank"} className={"link"}>Golang, </a>
                            <a href={"https://isocpp.org/"} target={"_blank"} className={"link"}>C++, </a>
                            <a href={"https://www.java.com/en/"} target={"_blank"} className={"link"}>Java, </a>
                            <a href={"https://kotlinlang.org/"} target={"_blank"} className={"link"}>Kotlin, </a>
                            <a href={"https://www.python.org/"} target={"_blank"} className={"link"}>Python, </a>
                            <a href={"http://php.net/"} target={"_blank"} className={"link"}>PHP and </a>
                            <a href={"https://www.ecma-international.org/"} target={"_blank"} className={"link"}>Javascript</a>
                            .</span>
                    </ScrollAnimation>
                </Parallax>
                <Parallax bgImage={require('../imgs/li.jpg')}
                          strength={300}
                          className={"view"}>
                    <ScrollAnimation animateIn={"fadeInLeft"} className={"viewLeft fourL"}>
                        <span className="text white">
                            I've worked on a lot of personal projects, many of which can be found on my <a href={"https://github.com/TooFiveFive"} target={"_blank"}>GitHub account.</a>
                            <br /><Link to={"/projects"}>
                                > Click here to view all my projects. &lt;
                            </Link>
                        </span>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={"fadeIn"} className={"viewRight fourR"}>
                        <h2>&lt; PROJECTS /></h2>
                    </ScrollAnimation>
                </Parallax>
                <footer>
                    <i>Made with <a href={"https://reactjs.org/"} target={"_blank"}>React</a> by Eric Moynihan.</i><br />
                    <a href={"https://github.com/TooFiveFive/er1c.me"} target={"_blank"}>View Source Code</a>
                </footer>
            </main>
        );
    }

}

export default Home;