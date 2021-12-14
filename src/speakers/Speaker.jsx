import React from 'react';
import PropTypes from 'prop-types';

const Speaker = (props) =>
  <div className="speaker">
    {props.img !== 'NA' &&
      <a className="limited">
        <img src={props.img} ></img>
      </a>}
    <h3>{props.name}  </h3>
    <p>{props.desc}</p>
  </div>;

Speaker.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string,
};

export default Speaker;
