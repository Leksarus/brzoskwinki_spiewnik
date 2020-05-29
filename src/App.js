import React from 'react'
import AppWrapper from './AppWrapper'
import Header from './Header'
import List from './List'
import Preview from './Preview'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <AppWrapper>
        <Header />
          <Switch>
            <Route path="/preview/:song">
              <Preview />
            </Route>
            <Route exact path="/">
              <List />
            </Route>
          </Switch>
        <List />
        </AppWrapper>
      </Router>
    </div>
  );
}

export default App;
