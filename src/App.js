import React from 'react';
import StandardIndex from 'components/views/StandardIndex';
import HalpisRiftIndex from 'components/views/HalpisRiftIndex';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Route exact path="/listbuilder/halpis-rift" component={HalpisRiftIndex} />
      <Route exact path="/listbuilder" component={StandardIndex} />
    </Router>
  );
};

export default App;
