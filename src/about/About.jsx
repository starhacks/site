import React from 'react';
import PropTypes from 'prop-types';

const About = (props) =>
    <div className="about">
        <h2>{props.title}</h2>
    </div>;

About.propTypes = {
    title: PropTypes.string.isRequired,
};

export default About;
