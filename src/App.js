import React from 'react';
import classes from'./App.module.css';

import {BrowserRouter} from 'react-router-dom';
import AppLayout from './hoc/AppLayout/AppLayout';
import LiveCasesData from './containers/LiveCasesData/LiveCasesData';
import CountriesData from './containers/CountriesData/CountriesData';


const App = (props) =>{
  return (
    <div className={classes.App}>
      <BrowserRouter>
      <AppLayout>
       <LiveCasesData />
       <CountriesData />
      </AppLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
