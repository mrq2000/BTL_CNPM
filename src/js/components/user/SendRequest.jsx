import React, { useState } from 'react';
import {
  TextField, Container, Button, Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import ConfirmDialog from '../common/ConfirmDialog';
import requestStatus from '../../enums/requestStatus';
import { timeNow } from '../../helpers/dayjs';

const useStyles = makeStyles((theme) => ({
  input: {
    marginBottom: theme.spacing(3),
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),

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
  img: {
    height: theme.spacing(20),
    width: theme.spacing(20),

    objectFit: 'cover',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
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

  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = React.useState(null);

  const fileHandler = (e) => {
    if (e.target.files[0].type.startsWith('image')) {
      setFile(e.target.files[0]);
    } else {
      setFile(null);
      enqueueSnackbar('Vui lòng chọn file với định dạng hình ảnh', { variant: 'error' });
    }
  };

  const userEmail = firebase.auth().currentUser.email;

  const [confirmOpen, setConfirmOpen] = useState(false);
  const handleClose = () => {
    setConfirmOpen(false);
  };

  const handleSend = () => {
    setLoading(true);
    const imgName = timeNow;
    firebase.storage()
      .ref()
      .child(`/image/${imgName}.png`)
      .put(file)
      .then(() => {
        firebase.database().ref('request').push({
          user: userEmail,
          imgId: `${imgName}.png`,
          title,
          content,
          state: requestStatus.NEW,
          datetime: timeNow,
        }).then(() => {
          history.push('/user/request-list');
        })
          .catch(() => {
            enqueueSnackbar('Có Lỗi Xảy Ra, Vui Lòng Kiểm Tra Lại', { variant: 'error' });
            setLoading(true);
          });
      })
      .catch(() => {
        enqueueSnackbar('Có Lỗi Xảy Ra, Vui Lòng Kiểm Tra Lại', { variant: 'error' });
        setLoading(true);
      });
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

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <TextField
          fullWidth
          label="Upload Img"
          variant="outlined"
          type="file"
          onChange={fileHandler}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <img
          className={classes.img}
          src={file ? URL.createObjectURL(file) : null}
          alt={file ? file.name : null}
        />
      </Box>

      <Button
        variant="contained"
        className={classes.button}
        onClick={handleSubmit(() => setConfirmOpen(true))}
        disabled={loading}
      >
        Gửi
      </Button>
    </Container>
  );
};

export default UserRequestIfi;
