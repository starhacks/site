import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';

const Questions = (props) =>
    props.faqList.length > 0 &&
    <div className="questions">
        <h2>
            {props.title}
        </h2>
        <div className="question-panel flex-row-col">
            {props.faqList.map((faq) =>
                <Question key={faq.q} q={faq.q} a={faq.a} />)}
        </div>
    </div>;

Questions.propTypes = {
    title: PropTypes.string.isRequired,
    faqList: PropTypes.array.isRequired,
};

export default Questions;
