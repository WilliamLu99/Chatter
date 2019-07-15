import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    width: '300px',
    height: '100px',
    borderRadius: '15px',
    padding: '20px',
    margin: '20px',
  },

  sent: {
    backgroundColor: 'blue',
    float: 'right',
  },

  received: {
    backgroundColor: 'red',
    float: 'left',
  },

  container: {
    width: '100%',
    height: '200px',
  },
});

function  Message(props) {

  const classes = useStyles();

  const messageClass = (props.sent) ? `${classes.root} ${classes.sent}` : `${classes.root} ${classes.received}`

  return (
    <div className={classes.container}>
    <div className={messageClass}>
      <p> {props.message} </p>
    </div>
    </div>
  );
}

export default Message;
