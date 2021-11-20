import React, { useEffect } from 'react';
import StandardIndex from 'components/views/StandardIndex';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

const App = () => {
  const initGA = () => {
    ReactGA.initialize('UA-213455639-1');
    ReactGA.pageview('Landing page');
  }

  useEffect(() => {
    initGA();
  });

  return (
    <Router>
      <Route exact path="/listbuilder" component={StandardIndex} />
    </Router>
  );
};

export default App;
