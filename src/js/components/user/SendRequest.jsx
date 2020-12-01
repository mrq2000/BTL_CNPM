import React, { useState } from 'react';
import { TextField, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import ConfirmDialog from '../common/ConfirmDialog';

const useStyles = makeStyles((theme) => ({
  input: {
    marginBottom: theme.spacing(3),
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
  const {
    register,
    errors,
    handleSubmit,
    watch,
  } = useForm({
    mode: 'onChange',
  });

  const {
    title,
    content,
  } = watch();

  const [confirmOpen, setConfirmOpen] = useState(false);
  const handleClose = () => {
    setConfirmOpen(false);
  };

  const handleSend = () => {
    console.log(title, content);
  };

  return (
    <Container className={classes.container}>
      <ConfirmDialog
        title="Gửi Kiến Nghị"
        content="Sau khi gửi bạn sẽ không thể xóa kiến nghị?"
        open={confirmOpen}
        handleClose={handleClose}
        onConfirm={handleSend}
      />

      <TextField
        className={classes.input}
        fullWidth
        label="Tiêu đề"
        variant="outlined"
        inputRef={register({ required: true })}
        name="title"
        error={!!errors.title}
        helperText={errors.title && 'Tiêu đề không được để trống'}
      />

      <TextField
        className={classes.input}
        fullWidth
        label="Nội dung"
        variant="outlined"
        rows={5}
        multiline
        inputRef={register({ required: true })}
        name="content"
        error={!!errors.content}
        helperText={errors.content && 'Nội dung không được để trống'}
      />

      <Button
        variant="contained"
        className={classes.button}
        onClick={handleSubmit(() => setConfirmOpen(true))}
      >
        Gửi
      </Button>
    </Container>
  );
};

export default UserRequestIfi;
