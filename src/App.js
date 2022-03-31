import React from 'react'
import AppWrapper from './AppWrapper'
import Header from './Header'
import List from './List'
import Preview from './Preview'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <AppWrapper>
          <Header />
          <Switch>
            <Route path="/preview/:title">
              <Preview />
            </Route>
            <Route exact path="/">
              <List />
            </Route>
          </Switch>
        </AppWrapper>
      </Router>
    </div>
  );
}

export default App;
