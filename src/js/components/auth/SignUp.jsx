import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import firebase from 'firebase';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';

import { userSignUp } from '../../validator/auth';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const {
    register,
    errors,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(userSignUp),
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then(() => {
        history.push('/user/info');
      })
      .catch(() => {
        enqueueSnackbar('Vui Lòng Kiểm Tra lại Tài Khoản Của Bạn', { variant: 'error' });
        setLoading(false);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color="primary">
          Đăng ký
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            margin="normal"
            inputRef={register}
            fullWidth
            label="Email"
            name="email"
            autoComplete="email"
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ''}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            inputRef={register}
            fullWidth
            name="password"
            label="Password"
            type="password"
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ''}
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            inputRef={register}
            fullWidth
            name="passwordConfirmation"
            label="Confirm Password"
            type="password"
            error={!!errors.passwordConfirmation}
            helperText={errors.passwordConfirmation ? errors.passwordConfirmation.message : ''}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={loading}
          >
            Đăng Ký
          </Button>
        </form>
      </div>
    </Container>
  );
}
