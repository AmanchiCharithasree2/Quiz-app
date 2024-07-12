import React from 'react';

const Result = ({ score, totalQuestions }) => {
  return (
    <div className='result'>
      <h2>
        You scored {score} out of {totalQuestions}
      </h2>
    </div>
  );
};

export default Result;
