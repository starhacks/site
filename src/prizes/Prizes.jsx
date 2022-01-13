import React from 'react';
import PropTypes from 'prop-types';
import { prizesImg } from '../constants';

const Prizes = (props) =>
  <div className="prizes">
    <h2>
      {props.title}
    </h2>
    <img src={prizesImg} />
    <p>Check out the prize categories on our <a href="https://starhacks-2.devpost.com/">Devpost</a>!</p>
  </div>;


Prizes.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Prizes;
