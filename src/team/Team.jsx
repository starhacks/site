import React from 'react';
import PropTypes from 'prop-types';

const Team = (props) =>
    <div className="team">
        <h2>{props.title}</h2>
    </div>;

Team.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Team;
