import React from 'react';
import PropTypes from 'prop-types'


const Questions = props => <div className="events">{props.title}</div>

Questions.propTypes = {
    title: PropTypes.string.isRequired
}

export default Questions;