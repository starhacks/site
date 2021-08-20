import React from 'react';
import PropTypes from 'prop-types';
import { aboutPhoto } from '../constants';

const About = (props) =>
    <div className="about">
        <h2>{props.title}</h2>
        <div className="about-photo">
            <div>
                <p>
                    StarHacks is an international non-profit striving
                    to create gender-inclusive spaces in computer science,
                    breaking the stereotype of what it means to be a coder
                    one hackathon at a time. Each year, StarHacks hosts an
                    annual <strong>all-inclusive, all-female and nonbinary,
                        virtual hackathon for high school and collegiate coders
                        of all coding backgrounds.</strong>
                </p>
                <br />
                <p>
                    After our first iteration with over 800 registrants and 36
                    hours of hacking, StarHacks is proud to host our second
                    hackathon, <strong>
                        StarHacks II, on Saturday and Sunday,
                        January  22-23, 2022 with beginner-focused pre-event
                        workshops  on Saturday, January 7 and Saturday,
                        January 15.</strong>
                </p>
                <br />
                <p>
                    For our second year, we are
                    <strong className="highlight"> #BuildingBridges</strong>:
                    bridging divides, venturing into uncharted
                    territory, finding unity as we pioneer into new frontier.
                    Through code and community, our core mission is to create
                    an environment for the world’s brightest thinkers to empower
                    and be empowered, building the bridge to a more inclusive
                    future — and we would love for you to be a part of it.
                </p>
            </div>
            <img src={aboutPhoto} />
        </div>
    </div>;

About.propTypes = {
    title: PropTypes.string.isRequired,
};

export default About;
