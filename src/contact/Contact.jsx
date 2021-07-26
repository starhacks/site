import React from 'react';
import PropTypes from 'prop-types'
import '../App.scss'

const Contact = props =>
    <div className="contact">
        <h2>{props.title}</h2>
    </div>

Contact.propTypes = {
    title: PropTypes.string.isRequired
}

export default Contact;