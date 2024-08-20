
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Cloud Security Discovery Questionnaire</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/questionnaire">Start Questionnaire</Link>
      </nav>
    </header>
  );
}

export default Header;
