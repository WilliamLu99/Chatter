import React from 'react';
import {makeStyles, Grid, TextField, Button, Container} from '@material-ui/core';

const useStyles = makeStyles({
  input: {
    position: 'fixed',
    bottom: '5%',
    width: '100%',
    margin: '0 auto',
  },
});
export default function InputPanel() {
  const classes = useStyles();
  return(
    <div>
      <Grid container spacing={3} alignItems="center" className={classes.input}>
        <Grid item xs={11}>
          <TextField label="Input" variant="outlined" margin="normal" fullWidth="true" >Test</TextField>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" color="primary" margin="normal" fulllWidth="true" >Input</Button>
    </Grid>
      </Grid>
    </div>
  )
}
