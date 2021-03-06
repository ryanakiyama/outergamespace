import React from 'react';
import PropTypes from 'prop-types';
import AnswerListEntry from './AnswerListEntry';

const propTypes = {
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentAns: PropTypes.string.isRequired,
  updateAnswer: PropTypes.func.isRequired,
};

const AnswerList = ({ answers, currentAns, updateAnswer }) => (
  <div className="screen-middle">
    {answers.map((answer, index) => (
      <AnswerListEntry
        key={answer}
        answer={answer}
        index={index}
        selected={answer === currentAns}
        updateAnswer={() => updateAnswer(answer)}
      />
    ))}
  </div>
);

AnswerList.propTypes = propTypes;

export default AnswerList;
