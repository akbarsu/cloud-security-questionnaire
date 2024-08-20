
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import QuestionnairePage from './pages/QuestionnairePage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/questionnaire" component={QuestionnairePage} />
      </Switch>
    </Router>
  );
}

export default App;
