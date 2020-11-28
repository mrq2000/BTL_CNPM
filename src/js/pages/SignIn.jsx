import React, { useState } from 'react';
import {
  Grid, Box, Button, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SignInComponent from '../components/auth/SignIn';
import AdminSignIn from '../components/auth/AdminSignIn';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#fbd5cd',
  },
  fullHeight: {
    height: '100vh',
  },
  buttonGruop: {
    borderRadius: 10,
    backgroundColor: '#e5e5e5',

    width: 400,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  button: {
    color: '#fff',
    backgroundColor: '#f67f30',

    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(8),
    marginLeft: theme.spacing(8),
  },
}));

const SignIn = () => {
  const [role, setRole] = useState('user');
  const classes = useStyles();

  const renderLoginForm = () => {
    if (role === 'admin') return <AdminSignIn />;
    return <SignInComponent />;
  };

  return (
    <Grid container className={classes.fullHeight}>
      <Grid
        xs={6}
        item
        container
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <Box display="flex" flexDirection="column" className={classes.buttonGruop}>
          <Typography align="center" variant="h5" color="primary">
            Đăng nhập
          </Typography>
          <Button variant="contained" className={classes.button} onClick={() => setRole('user')}>
            Dành cho người dân
          </Button>
          <Button variant="contained" className={classes.button} onClick={() => setRole('admin')}>
            Dành cho tổ trưởng
          </Button>
        </Box>
      </Grid>

      <Grid xs={6} item>
        {renderLoginForm()}
      </Grid>
    </Grid>
  );
};

export default SignIn;
