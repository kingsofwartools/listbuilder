import React from 'react';
import StandardIndex from 'components/views/StandardIndex';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

ReactGA.initialize('G-7YYLW5J4CR');
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  return (
    <Router>
      <Route exact path="/listbuilder" component={StandardIndex} />
    </Router>
  );
};

export default App;
