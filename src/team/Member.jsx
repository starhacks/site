import React from 'react';
import PropTypes from 'prop-types';

const Member = (props) =>
    <div className="member">
        {props.img !== 'NA' &&
            <a className="limited">
                <img src={props.img} ></img>
            </a>}
        {props.img === 'NA' &&
            <a className="limited">
            </a>}
        <h3>{props.name}</h3>
        <p>{props.role}</p>
    </div>;

Member.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    img: PropTypes.string,
};

export default Member;
