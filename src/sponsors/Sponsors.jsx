import React from 'react';
import PropTypes from 'prop-types'


const Sponsors = props => <div className="sponsors">{props.title}</div>

Sponsors.propTypes = {
    title: PropTypes.string.isRequired
}

export default Sponsors;