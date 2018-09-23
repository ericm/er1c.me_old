import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import { Parallax } from 'react-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor'
import "animate.css/animate.min.css";
import './Home.css';

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
                    <p></p>
                </ScrollableAnchor>
                <Parallax bgImage={require('../imgs/cliff1.jpg')}
                          strength={300}
                          className={"view"}>
                    <ScrollAnimation animateIn={"fadeIn"} className={"viewLeft oneL"}>
                        <h2>&lt; ABOUT ME /></h2>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={"fadeInRight"} className={"viewRight oneR"}>
                        <span class="text">I'm an Irish <span aria-label={"flag"} role={"img"}>🇮🇪</span> CS Student currently studying <a href={"http://ucc.ie"} target={"_blank"} className={"link"}>@ UCC</a><br />
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
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="reveal">
                        Widget, Inc.
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
            </main>
        );
    }

}

export default Home;