import React from 'react';
import PropTypes from 'prop-types';

const Panel = (props) =>
    <div className="role-panel">
        {Array.isArray(props.blurb) &&
            props.blurb.map((b) => <p key={b}>{b}</p>)}
        {!Array.isArray(props.blurb) && <p>{props.blurb}</p>}
        <center>
            <h3>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={props.button}
                    className="button">
                    {props.title}
                </a>
            </h3>
        </center>
    </div>;

Panel.propTypes = {
    title: PropTypes.string.isRequired,
    blurb: PropTypes.any.isRequired,
    button: PropTypes.string.isRequired,
};

export default Panel;
