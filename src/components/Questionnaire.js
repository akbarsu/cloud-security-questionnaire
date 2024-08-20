
import React, { useState } from 'react';
import QuestionSection from './QuestionSection';
import { submitResponses } from '../api/apiService';

function Questionnaire() {
  const [responses, setResponses] = useState({});
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    {
      id: 0,
      title: 'General Questions',
      questions: [
        {
          id: 'q1',
          text: 'Which cloud platform(s) are you using?',
          options: ['AWS', 'Azure', 'GCP', 'Multi-Cloud'],
        },
      ],
    },
    {
      id: 1,
      title: 'AWS-Specific Questions',
    },
  ];

  const handleAnswer = (questionId, answer) => {
    setResponses({ ...responses, [questionId]: answer });

    if (questionId === 'q1') {
      switch (answer) {
        case 'AWS':
          setCurrentSection(1);
          break;
        case 'Azure':
          setCurrentSection(2);
          break;
        case 'GCP':
          setCurrentSection(3);
          break;
        case 'Multi-Cloud':
          setCurrentSection(4);
          break;
        default:
          setCurrentSection(0);
      }
    }
  };

  const handleSubmit = async () => {
    const result = await submitResponses(responses);
    if (result) {
      setCurrentSection('summary');
    }
  };

  return (
    <div>
      <h2>{sections[currentSection].title}</h2>
      <QuestionSection
        questions={sections[currentSection].questions}
        onAnswer={handleAnswer}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Questionnaire;
