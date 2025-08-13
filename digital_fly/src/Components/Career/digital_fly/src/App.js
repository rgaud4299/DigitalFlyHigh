import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CareerPost from './Components/Career/JobPosts';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CareerPost} />
        {/* Additional routes can be added here */}
      </Switch>
    </Router>
  );
};

export default App;