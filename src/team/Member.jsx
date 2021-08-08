import React from 'react';
import PropTypes from 'prop-types';

const Member = (props) =>
    <div className="member">
        {props.img && <img src={props.img} ></img>}
        <h2>{props.name}</h2>
        <p>{props.role}</p>
    </div>;

Member.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    img: PropTypes.string,
};

export default Member;
