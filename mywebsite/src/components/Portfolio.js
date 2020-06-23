import React, { Component  } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Jumbotron from './format/Jumbotron';
import { Card } from 'react-bootstrap';
import Navigation from './format/NavBar';
import Books from './media/projectOne.png';
import covid from './media/projectTwo.png';



const Styles = styled.div`
    .portfolio-item {
        display: flex;
        align-items: center;
        justify-content: center; 
        margin: 5rem; 
    }
    
    .portfolio-heading {
        text-align: center;
        text-transform: uppercase;
        line-height: 0;
    }

    .portfolio-heading h1{
        font-size: 4rem;
        opacity: .3;
    }
    
    .portfolio-heading h6 {
        font-size: 2rem;
        font-weight: 300;
    }

    .cardTitle{
        text-align: center;
        text-transform: uppercase;
        line-height: 0;
    }

    .profile-description {
        flex: 1;
        margin: auto;
    }

    .portfolio-description h1 {
        font-size: 2.5rem;
        font-weight: 300;
        margin: 1rem 0;
    }

    .portfolio-description {
        display: inline-block;
        margin-top: 2.5rem;
        font-size: 1rem;
        text-transform: uppercase;
        color: #00000;
        transition: color 650ms;
    }

    .portfolio-description .cta:hover {
        color: #333333;
    }
`;

export class Portfolio extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <Jumbotron />
                <Styles>
                    <div className="portfolio-heading">
                        <h1>Portfolio</h1>
                        <h6>Recent Work</h6>
                    </div>
                    <div className="portfolio-item">
                        <Card style={{ width: '18rem' }} className="portfolio-item">
                            <Card.Img variant="top" className="portfolio-img" src={Books} />
                            <Card.Body className="portfolio-description">
                                <Card.Title className="cardTitle">Book Search</Card.Title>
                                <Card.Text>
                                    A book search application that generates music based search criteria, user location and weather (mood).
                                </Card.Text>
                                <Button variant="primary" href="https://yechan96.github.io/bootcamp_project1/">
                                    Visit Application
                                </Button>
                                <Button variant="primary" href="https://github.com/yechan96/bootcamp_project1">
                                    Visit Repository
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
        
                    <div className="portfolio-item">
                        <Card style={{ width: '18rem' }} className="portfolio-item">
                            <Card.Img variant="top" className="portfolio-img" src={covid} />
                            <Card.Body className="portfolio-description">
                                <Card.Title className="cardTitle">COVID-19 Tracker</Card.Title>
                                <Card.Text>
                                Visualize the spread and impact of Covid-19, subscribe for daily updates, and view stats.
                                </Card.Text>
                                <Button variant="primary" href="http://plague.site">
                                    Visit Application
                                </Button>
                                <Button variant="primary" href="https://github.com/yankidank/covid-19-tracker">
                                    Visit Repository
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Styles>
            </React.Fragment>
        )

    }
}

export default Portfolio;