import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleAppBar from './SimpleAppBar';
import InputPanel from './InputPanel';
import {Grid, Box, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import Message from './Message';

const useStyles = makeStyles({

});

function App() {
  return (
    <div>
      {SimpleAppBar()}
      <Message sent={true} message="Hi!"></Message>
      <Message sent={false} message="Sup!"></Message>
      <Grid container direction="column" alignItems="stretch">
        <Grid item xs={12}>
        </Grid>
        <Grid item xs={12}>{InputPanel()}</Grid>
      </Grid>
    </div>
  );
}

export default App;
