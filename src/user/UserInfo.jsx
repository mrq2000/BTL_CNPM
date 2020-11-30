import React from 'react';
import {
  Box, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import firebase from 'firebase';
import { useQuery } from 'react-query';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    marginRight: theme.spacing(2),
  },
}));

const UserInfo = () => {
  const classes = useStyles();
  const userId = firebase.auth().currentUser.uid;
  const { isLoading, data: userInfo, error } = useQuery('userInfo', async () => {
    const data = await (await firebase.database().ref(`/users/${userId}`).once('value')).val();
    return data;
  }, {
    staleTime: Infinity,
  });

  if (isLoading) return <LinearProgress />;
  if (error) return <>Error</>;

  return (
    <>
      <Box display="flex" flexDirection="column">
        <Box display="flex">
          <Typography className={classes.title}>
            Tên:
          </Typography>
          <Typography>
            {userInfo.name}
          </Typography>
        </Box>

        <Box display="flex">
          <Typography className={classes.title}>
            Giới Tính:
          </Typography>
          <Typography>
            {userInfo.gender === 'male' ? 'Nam' : 'Nữ'}
          </Typography>
        </Box>

        <Box display="flex">
          <Typography className={classes.title}>
            Địa chỉ:
          </Typography>
          <Typography>
            {userInfo.address}
          </Typography>
        </Box>

        <Box display="flex">
          <Typography className={classes.title}>
            Ngày sinh:
          </Typography>
          <Typography>
            {userInfo.birthday}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default UserInfo;
