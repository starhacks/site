import React from 'react';
import PropTypes from 'prop-types'


const Anecdotes = props => <div className="anecdotes">{props.title}</div>

Anecdotes.propTypes = {
    title: PropTypes.string.isRequired
}

export default Anecdotes;