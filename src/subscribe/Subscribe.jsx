import React from 'react';
import PropTypes from 'prop-types'


const Subscribe = props => <div className="sponsors">{props.title}</div>

Subscribe.propTypes = {
    title: PropTypes.string.isRequired
}

export default Subscribe;