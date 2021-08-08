import React from 'react';
import PropTypes from 'prop-types';

const Events = (props) =>
    <div className="events">
        <h2>{props.title}</h2>
    </div>;

Events.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Events;
