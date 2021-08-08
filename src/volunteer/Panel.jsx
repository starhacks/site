import React from 'react';
import PropTypes from 'prop-types';

const Panel = (props) =>
    <div className="role-panel">
        <h3>{props.title}</h3>
        <p>{props.blurb}</p>
        <center>
            <a href="" className="button">{props.button}</a>
        </center>
    </div>;

Panel.propTypes = {
    title: PropTypes.string.isRequired,
    blurb: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
};

export default Panel;
