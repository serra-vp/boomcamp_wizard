import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// css
import './App.css';

// components
import { Onboarding } from './components/pages/Onboarding';

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/onboarding">
            <Onboarding />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
