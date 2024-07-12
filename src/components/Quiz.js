import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const questions = [
  {
    questionText: 'What is the capital france',
    answers: [
      { answerText: 'Berlin', isCorrect: false },
      { answerText: 'Madrid', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Lisbon', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is the world wide handsome in the year 2024?',
    answers: [
      { answerText: 'hrithik roshan', isCorrect: false },
      { answerText: 'kim Taehyung', isCorrect: true },
      { answerText: 'Salman Khan', isCorrect: false },
      { answerText: 'Jeon Jung Kook', isCorrect: false },
    ],
  },
  {
    questionText: 'who won the world cup in the year 2024?',
    answers: [
      { answerText: 'japan', isCorrect: false },
      { answerText: 'America', isCorrect: false },
      { answerText: 'Pakistan', isCorrect: false },
      { answerText: 'India', isCorrect: true},
    ],

  },
  // Add more questions as needed
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='quiz'>
      {showScore ? (
        <Result score={score} totalQuestions={questions.length} />
      ) : (
        <Question
          question={questions[currentQuestion]}
          onAnswerClick={handleAnswerOptionClick}
        />
      )}
    </div>
  );
};

export default Quiz;
