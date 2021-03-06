import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Navigation from './format/NavBar.js';
import styled from 'styled-components';



const Styles = styled.div`
    .homeBtn {
        color: red;
    }
    
    .landing-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    .landing-text h1 {
        font-size: 6rem;
        font-family:'Dancing Script', cursive;
        background: linear-gradient(to top,black, grey, white);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        padding: 1rem;
        user-select: none;
    }
    .landing-text h6 {
        font-size: 2rem;
        font-weight: 300;
    }
    .skillIcons {
        margin-top: 1rem;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .iconBox i {
        padding: .25rem;
        margin: .50rem;
    }
`;


export class Home extends Component {
    render () {
        return (
            <React.Fragment>
                <Navigation />
                <Main />
            </React.Fragment>
        )    
    }
}


function Main() {
    return (
        <Styles>
            <div className="landing-text">
                <h1>
                    Ashely Rumbaoa
                </h1>
                <h6>
                    Full Stack Developer
                </h6>
                <div className="skillIcons">
                    <div className="iconBox">
                        <i className="devicon-react-original colored"></i>
                        <i className="devicon-javascript-plain colored"></i>
                        <i className="devicon-jquery-plain colored"></i>
                        <i className="devicon-css3-plain colored"></i>
                        <i className="devicon-bootstrap-plain colored"></i>
                    </div>
                </div>
                <Button className="btn btn-light homeBtn">
                    <Link to="/portfolio">View My Work</Link>
                </Button>
            </div>
        </Styles>
    )    
}

export default Home;