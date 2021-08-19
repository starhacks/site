import React from 'react';
import PropTypes from 'prop-types';
import { aboutPhoto } from '../constants';

const About = (props) =>
    <div className="about">
        <h2>{props.title}</h2>
        <div className="about-photo">
            <div>
                <p>
                    After our first iteration with over
                    800 registrants and 36 hours of hacking,
                    StarHacks is proud to host our second hackathon,
                    StarHacks II, on Saturday and Sunday,
                    January 22-23, 2022 with beginner-focused pre-event
                    workshops on Saturday, January 7 and Saturday, January 15.
                </p>
                <br />
                <p>
                    StarHacks is a free, beginner-focused, all-inclusive
                    all-female and nonbinary high school and collegiate
                    global and virtual hackathon,
                    here to break the mold of what a person in tech looks
                    like one hackathon at a time.
                </p>
                <br />
                <p>
                    For our second year, we are #BuildingBridges:
                    bridging divides,
                    venturing into uncharted territory,
                    finding unity as we pioneer into new frontier.
                    Through code and community, our core mission
                    is to create an environment
                    for the world’s brightest thinkers to empower
                    and be empowered, building the bridge
                    to a more inclusive future — and we would love
                    for you to be a part of it.
                </p>
            </div>
            <img src={aboutPhoto} className="about-photo" />
        </div>
    </div>;

About.propTypes = {
    title: PropTypes.string.isRequired,
};

export default About;
