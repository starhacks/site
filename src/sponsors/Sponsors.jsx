import React from 'react';
import PropTypes from 'prop-types';

const Sponsors = (props) =>
    <div className="sponsors">
        <h2>
            {props.title}
        </h2>
        <p>
            Interested in sponsoring StarHacks II? Reach out to us at {' '}
            <a href="mailto:sponsor@starhacks.tech">sponsor@starhacks.tech</a>
            !
        </p>
    </div>;

Sponsors.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Sponsors;
