import React from 'react';
import PropTypes from 'prop-types'
import '../App.scss'

const Sponsors = props =>
    <div className="sponsors">
        <h2>
            {props.title}
        </h2>
    </div>

Sponsors.propTypes = {
    title: PropTypes.string.isRequired
}

export default Sponsors;