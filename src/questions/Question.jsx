import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowDown,
    faArrowUp,
} from '@fortawesome/free-solid-svg-icons';


const Question = (props) => {
    const [toggle, changeToggle] = useState(false);

    return <div className="question noselect">
        <center>
            <a
                onClick={() => changeToggle(!toggle)}
                target="_blank"
                rel="noreferrer"
                className="buttonStyle">
                <div className="button">
                    <p className="q-text">
                        {toggle ?
                            <FontAwesomeIcon icon={faArrowUp} /> :
                            <FontAwesomeIcon icon={faArrowDown} />
                        }{props.q}
                    </p>
                </div>
            </a>
            <div className="ans">
                <p >{toggle && props.a}</p>
            </div>
        </center>
    </div>;
};

Question.propTypes = {
    q: PropTypes.string.isRequired,
    a: PropTypes.string.isRequired,
};

export default Question;
