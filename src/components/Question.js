
import React, { useState } from 'react';

function Question({ question, options, onAnswer }) {
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setError('');
    onAnswer(question.id, e.target.value);
  };

  const handleValidation = () => {
    if (!selectedOption) {
      setError('This question is required');
      return false;
    }
    return true;
  };

  return (
    <div className="question">
      <h3>{question.text}</h3>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <input
              type="radio"
              id={`option-${index}`}
              name={question.id}
              value={option}
              onChange={handleChange}
              onBlur={handleValidation}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </li>
        ))}
      </ul>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Question;
