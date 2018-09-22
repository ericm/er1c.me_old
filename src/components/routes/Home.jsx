import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import { Parallax } from 'react-parallax';
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
                        strength={1200}
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
                <section>

                </section>
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