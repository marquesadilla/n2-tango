import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Yomu from './Yomu';
import Kaku from './Kaku';
import './App.css';

const App = () => {
  return(
    <Router>
      <Layout>
        <Switch>
          <Route path ="/" exact component={Home} />
          <Route path="/kanji" component={Yomu} />
          <Route path="/書くのを覚える" component={Kaku} />
          <Route render={() => <h1>404 Not Found</h1>} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;