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
        <a
            onClick={() => changeToggle(!toggle)}
            target="_blank"
            rel="noreferrer">
            <div className={toggle ? 'q-text flex-row' :
                'q-text flex-row round-all'}>
                <p>{props.q} {' '}</p>
                <p>
                    {toggle ?
                        <FontAwesomeIcon icon={faArrowUp} /> :
                        <FontAwesomeIcon icon={faArrowDown} />
                    }
                </p>
            </div>
        </a>
        <div className={toggle ? 'display' : 'no-display'}>
            <div className="ans">
                <p>{props.a}</p>
            </div>
        </div>
    </div>;
};

Question.propTypes = {
    q: PropTypes.string.isRequired,
    a: PropTypes.string.isRequired,
};

export default Question;
