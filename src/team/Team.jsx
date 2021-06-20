import React from 'react';
import PropTypes from 'prop-types'


const Team = props => <div className="team">{props.title}</div>

Team.propTypes = {
    title: PropTypes.string.isRequired
}

export default Team;