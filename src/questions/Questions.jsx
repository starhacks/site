import React from 'react';
import PropTypes from 'prop-types'
import '../App.scss'

const Questions = props =>
    <div className="questions">
        <h2>{props.title}</h2>
    </div>

Questions.propTypes = {
    title: PropTypes.string.isRequired
}

export default Questions;