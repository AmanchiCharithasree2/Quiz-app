import React from 'react';

const Question = ({ question, onAnswerClick }) => {
  return (
    <div className='question'>
      <div className='question-text'>{question.questionText}</div>
      <div className='answer-options'>
        {question.answers.map((answer, index) => (
          <button key={index} onClick={() => onAnswerClick(answer.isCorrect)}>
            {answer.answerText}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
