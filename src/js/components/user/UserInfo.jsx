import React from 'react';
import {
  Box, Typography, LinearProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import useUserInfo from '../../data/useUserInfo';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    marginRight: theme.spacing(2),
  },
  img: {
    marginRight: theme.spacing(3),
    height: theme.spacing(50),
    width: theme.spacing(40),
    objectFit: 'cover',
  },
}));

const UserInfo = () => {
  const classes = useStyles();
  const { isLoading, data: userInfo, error } = useUserInfo();

  if (isLoading) return <LinearProgress />;
  if (error) return <>Error</>;

  return (
    <Box display="flex" flexDirection="row" mt={3}>
      <img alt="logo" src={userInfo.img} className={classes.img} />

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
            {userInfo.gender}
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

        <Box display="flex">
          <Typography className={classes.title}>
            Số điện thoại:
          </Typography>
          <Typography>
            {userInfo.phone}
          </Typography>
        </Box>

        <Box display="flex">
          <Typography className={classes.title}>
            Email:
          </Typography>
          <Typography>
            {userInfo.email}
          </Typography>
        </Box>

        <Box display="flex">
          <Typography className={classes.title}>
            User Name:
          </Typography>
          <Typography>
            {userInfo.username}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default UserInfo;
