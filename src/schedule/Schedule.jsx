import React from 'react';
import PropTypes from 'prop-types'
import '../App.scss'

const Schedule = props =>
    <div className="schedule">
        <h2>
            {props.title}
        </h2>
    </div>

Schedule.propTypes = {
    title: PropTypes.string.isRequired
}

export default Schedule;