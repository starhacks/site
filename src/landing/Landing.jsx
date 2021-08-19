/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import * as Constants from '../constants';

export const Landing = (props) => {
    return (
        <div className="landing">
            <img src={props.img} alt="" />
            <div className="register">
                <p>{Constants.date}</p>
                <center>
                    <a
                        href={Constants.registerLink}
                        target="_blank"
                        rel="noreferrer"
                        className="buttonStyle">
                        <div className="button">
                            <h3>
                                Register
                            </h3>
                        </div>
                    </a>
                </center>
            </div>
        </div>
    );
};

Landing.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.any.isRequired,
};

export default Landing;
