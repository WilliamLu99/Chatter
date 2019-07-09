import React from 'react';
import {makeStyles, Grid, TextField, Button, Container} from '@material-ui/core';

export default function InputPanel() {
  return(
    <div>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={8}><TextField label="Input" variant="outlined" margin="normal" fullWidth >Test</TextField></Grid>
        <Grid item xs={4}><Button variant="contained" color="primary" margin="normal">Input</Button></Grid>
      </Grid>
    </div>
  )
}
