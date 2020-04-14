import React from 'react';
import classes from './App.module.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppLayout from './hoc/AppLayout/AppLayout';
import WorldCasesData from './containers/WorldCasesData/WorldCasesData';
import FAQ from './components/FAQ/Faq';


const App = (props) => {
  return (
    <div className={classes.App}>
      <BrowserRouter>
        <AppLayout>
          <Switch >
            <Route path="/faq" component={FAQ} />
            <Route path="/" exact component={WorldCasesData} />
          </Switch>
        </AppLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
