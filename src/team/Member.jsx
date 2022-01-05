import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Member = (props) =>
  <div className="member">
    {props.img !== 'NA' &&
            <a className="limited">
              <img src={props.img} ></img>
            </a>}
    {props.img === 'NA' &&
            <a className="limited">
            </a>}
    <h3>{props.name}
      <a href={'mailto:' +
                props.name.split(' ')[0].toLowerCase() +
                '@starhacks.tech'}>
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </h3>
    <p>{props.role}</p>
  </div>;

Member.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  img: PropTypes.string,
};

export default Member;
