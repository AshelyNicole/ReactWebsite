import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    .portfolio-item {
        display: flex;
        align-items: center;
        justify-content: center; 
        margin: 5rem; 
    }

    img {
        flex: 1;
        max-width: 25rem;
        margin: .5rem;
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

export const Portfolio = () => {
    return (
        <Styles>
            <div className="portfolio-heading">
                <h1>Portfolio</h1>
                <h6>Recent Work</h6>
            </div>
            <div className="portfolio-item">
                <div className="portfolio-description">
                    <h1>Book Search</h1>
                    <p>
                        A book search application that generates music based search criteria, user location and weather (mood).
                    </p>
                    <a href="https://yechan96.github.io/bootcamp_project1/">
                        Visit Application
                    </a>
                    <br />
                    <a href="https://github.com/yechan96/bootcamp_project1">
                        Visit Repository
                    </a>
                </div>
                <div className="portfolio-img">
                    <img src="./assets/projectOne.png" alt="" />
                </div>
            </div>

            <div className="portfolio-item">
                <div className="portfolio-img">
                    <img src="./assets/projectTwo.png" alt="" />
                </div>
                <div className="portfolio-description">
                    <h1>COVID-19 Tracker</h1>
                    <p>
                        Visualize the spread and impact of Covid-19, subscribe for daily updates, and view stats.
                    </p>
                    <a href="http://plague.site">
                        Visit Application
                    </a>
                    <br />
                    <a href="https://github.com/yankidank/covid-19-tracker">
                        Visit Repository
                    </a>
                </div>
            </div>
        </Styles>
    )
}
