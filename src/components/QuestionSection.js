
import React from 'react';
import Question from './Question';

function QuestionSection({ questions, onAnswer }) {
  return (
    <div>
      {questions.map((question, index) => (
        <Question
          key={index}
          question={question}
          options={question.options}
          onAnswer={onAnswer}
        />
      ))}
    </div>
  );
}

export default QuestionSection;
