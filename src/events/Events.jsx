import React from 'react';
import PropTypes from 'prop-types'


const Events = props => <div className="events">{props.title}</div>

Events.propTypes = {
    title: PropTypes.string.isRequired
}

export default Events;