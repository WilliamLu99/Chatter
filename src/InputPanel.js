import React, { useState } from 'react';
import {makeStyles, Grid, TextField, Button, Container, Checkbox} from '@material-ui/core';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const useStyles = makeStyles({
  input: {
    width: '100%',
    margin: '0 auto',
  },
});

const CREATE_MESSAGE = gql`
  mutation createMessage($content: String!, $sender: ID!, $recipient: ID!) {
    createMessage(input: {
      content: $content,
      recipientId: $recipient,
      senderId: $sender,
    }) {
      message {
        content
      }
      errors
    }
  }
`
export default function InputPanel() {
  const [textVal, setTextVal] = useState("");
  const [checked, setChecked] = useState(false);
  const [createMessage, { data } ] = useMutation(CREATE_MESSAGE)
  const classes = useStyles();

  function handleClick() {
    let sender_id = checked ? 1 : 2
    let recipient_id = checked ? 2 : 1
    createMessage({ variables: {
      content: textVal,
      sender: sender_id,
      recipient: recipient_id,
    }});
    setTextVal("");
    window.location.reload();
  }


  function handleTextFieldChange(e) {
    setTextVal(e.target.value);
  }

  function handleCheckBoxChange(e) {
    setChecked(e.target.checked);
  }

  return(
    <div>
      <Grid container spacing={3} alignItems="center" className={classes.input}>
        <Grid item xs={1}>
          <Checkbox checked={checked} onChange={handleCheckBoxChange}></Checkbox>
        </Grid>
        <Grid item xs={10}>
          <TextField label="Input" variant="outlined" margin="normal" fullWidth="true" value={textVal} onChange={handleTextFieldChange}></TextField>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" color="primary" margin="normal" fulllWidth="true" onClick={handleClick} >Input</Button>
        </Grid>
      </Grid>
    </div>
  )
}
