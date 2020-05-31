import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div `
    .jumbo {
        background: url(${"/assets/bg.jpeg"}) no-repeat fixed bottom;
        background-size: cover;
        color: #00000;
        width: 100%;
        height: 200px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #efefef;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
    .container {
        text-align: center;
    }
    .container h1{
        font-family:'Dancing Script', cursive;
    }
`;




export const Jumbotron = () => {
    return (
        <Styles>
            <Jumbo fluid= {true} className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <h1>Ashely Rumbaoa</h1>
                    <h6>Full Stack Developer</h6>
                </Container>

            </Jumbo>
        </Styles>
    )
}