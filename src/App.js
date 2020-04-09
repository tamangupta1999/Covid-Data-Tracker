import React from 'react';
import classes from'./App.module.css';

import {BrowserRouter} from 'react-router-dom';
import AppLayout from './hoc/AppLayout/AppLayout';
import LiveCasesData from './containers/LiveCasesData/LiveCasesData';


const App = (props) =>{
  return (
    <div className={classes.App}>
      <BrowserRouter>
      <AppLayout>
        <LiveCasesData />
      </AppLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
