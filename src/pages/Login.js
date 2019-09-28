import React from 'react';
import { Container, TextField, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  button: {
    width: 250,
    marginTop: 10,
    padding: 10,
  },
}));

export const Login = () => {
  const classes = useStyles();

  return (
    <Container>
      <form className={classes.container} noValidate autoComplete="off">
        <Typography variant="h2" color="primary">
          BLOX
        </Typography>
        <TextField
          id="outlined-name"
          label="Email"
          type="email"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Password"
          type="password"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <Button variant="outlined" color="primary" className={classes.button}>
          LOGIN
        </Button>
      </form>
    </Container>
  );
};
