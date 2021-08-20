import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = (props) =>
    <div className="contact">
        <div className="icons">
            {props.socialMediaHandles.map((i) =>
                <div className="icon-circle" key={i.link}>
                    <a className="icon" href={i.link}>
                        <FontAwesomeIcon icon={i.icon} />
                    </a>
                </div>,
            )}
        </div>
        <p className="blue">Copyright 2021 StarHacks</p>
    </div>;

Contact.propTypes = {
    socialMediaHandles: PropTypes.array.isRequired,
};

export default Contact;
