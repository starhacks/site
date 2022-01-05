import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';

const Questions = (props) =>
  props.faqList.length > 0 &&
    <div className="questions">
      <h2>
        {props.title}
      </h2>
      <div className="ques flex-row-col">
        <div className="question-panel flex-col">
          {props.faqList.
            filter((currElement, index) => (index % 2 != 0)).
            map((faq) =>
              <Question key={faq.q} q={faq.q} a={faq.a} />)}
        </div>
        <div className="question-panel flex-col">
          {props.faqList.
            filter((currElement, index) => index % 2 == 0).
            map((faq) =>
              <Question key={faq.q} q={faq.q} a={faq.a} />)}
        </div>
      </div>
    </div>;

Questions.propTypes = {
  title: PropTypes.string.isRequired,
  faqList: PropTypes.array.isRequired,
};

export default Questions;
