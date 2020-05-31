import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .about-heading {
        text-align: center;
        text-transform: uppercase;
        line-height: 0;
    }
    
    .about-heading h1{
        font-size: 4rem;
        opacity: .3;
    }
    
    .about-heading h6 {
        font-size: 2rem;
        font-weight: 300;
    }
    .links i {
        font-size: 2rem;
        padding: .5rem;
        transition: color 650ms;
    }
    
    img {
        max-width: 10rem;
        margin-top: 6rem;
        margin-right: 1rem;
    }
    .fa-linkedin:hover {
        color: grey;
    }
    
    .fa-github:hover {
        color: grey;
    }
`;

export const About = () => {
    return (
        <Styles>
            <div className="container">
                <div class="profileImage">
                    <img src="./assets/aboutMe.jpeg" alt=""/> 
                </div>
                <div className="about-details">
                    <div className="about-heading">
                        <h1>About</h1>
                        <h6>Myself</h6>
                    </div>
                    <p>
                        Hi Hi! Thanks for stopping by! My name Ashely Rumbaoa and I'm an aspiring Full Stack Developer.My first taste of basic HTML was during the days of Myspace and Xanga. Did I just age myself? Ohh well. It wasn't till I started working at the Computer Repair Center where I was exposed to the IT world and became interested in fixing computers, and learning how to code. After graduating, I did what most do, find a job that is related to my degree. My love for technology has only grown, and when  the opportunity to pursue my curiosity of becoming a web developer was presented, I took it!
                    </p>
                    <div className="links">
                        <a href='https://www.linkedin.com/in/ashelyrumbaoa'>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <label>LinkedIn</label>
                        <a href='https://www.github.com/AshelyNicole'>
                            <i className="fab fa-github"></i>
                        </a>
                        <label>GitHub</label>
                        <a href="./assets/RumbaoaResume2020.pdf">
                            <i class="fas fa-file"></i>
                        </a>
                        <label>Resume</label>
                    </div>
                </div>
            </div>
        </Styles>
    )
}