import React from 'react';
import PropTypes from 'prop-types';

const Questions = (props) =>
    props.faq.length > 0 &&
    <div className="questions">
        <div className="questions-panel">

        </div>
        <div className="questions-panel">

        </div>
    </div>;

Questions.propTypes = {
    title: PropTypes.string.isRequired,
    faq: PropTypes.array.isRequired,
};

export default Questions;
