import React from 'react';
import { TextField, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  input: {
    marginBottom: theme.spacing(1),
  },
  container: {
    marginTop: theme.spacing(3),

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  button: {
    marginTop: theme.spacing(3),

    color: '#fac09e',
    fontWeight: 'bold',
    fontSize: 16,
    border: ' 1px solid #fbd2b8',
    backgroundColor: '#fdf4f4',
  },
}));

const UserRequestIfi = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <TextField className={classes.input} fullWidth label="Tiêu đề" variant="outlined" />
      <TextField
        className={classes.input}
        fullWidth
        label="Nội dung"
        variant="outlined"
        rows={5}
        multiline
      />

      <Button variant="contained" className={classes.button}>
        Gửi
      </Button>
    </Container>
  );
};

export default UserRequestIfi;
