import React from 'react';
import PropTypes from 'prop-types'


const About = props => <div className="about">{props.title}</div>

About.propTypes = {
    title: PropTypes.string.isRequired
}

export default About;