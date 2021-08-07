import React from 'react';
import PropTypes from 'prop-types';
import '../App.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {socialMediaHandles} from '../constants';

const Contact = (props) =>
    <div className="contact">
        <h2>{props.title}</h2>
        <p>Reach out to us!</p>
        <div className="icons">
            {socialMediaHandles.map((i) =>
                <a href={i.link}>
                    <FontAwesomeIcon icon={i.icon} />
                </a>,
            )}
        </div>
    </div>;

Contact.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Contact;
