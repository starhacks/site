import React from 'react';
import PropTypes from 'prop-types'


const Contact = props => <div className="contact">{props.title}</div>

Contact.propTypes = {
    title: PropTypes.string.isRequired
}

export default Contact;