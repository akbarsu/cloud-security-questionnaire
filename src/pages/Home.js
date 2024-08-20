
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Welcome to the Cloud Security Discovery Questionnaire</h2>
      <Link to="/questionnaire">
        <button>Start Questionnaire</button>
      </Link>
    </div>
  );
}

export default Home;
