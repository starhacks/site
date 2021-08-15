import React from 'react';
import PropTypes from 'prop-types';
import { aboutPhoto } from '../constants';

const About = (props) =>
    <div className="about">
        <h2>{props.title}</h2>
        <div className="about-photo">
            <div>
                <p>
                    StarHacks is an international organization striving to
                    create spaces for gender minorities in computer science,
                    breaking the stereotype of what
                    it means to be a person in tech.
                    StarHacks holds a yearly virtual and global
                    hackathon for female and
                    nonbinary high school and college students as well as
                    year-round community-building opportunities.

                </p>
                <br />
                <p>
                    In January 2021, StarHacks hosted its first
                    virtual hackathon with over 800 registrants,
                    12 events, and 36 hours of hacking, support, and mentorship.
                </p>
            </div>
            <img src={aboutPhoto} className="about-photo" />
        </div>
    </div>;

About.propTypes = {
    title: PropTypes.string.isRequired,
};

export default About;
