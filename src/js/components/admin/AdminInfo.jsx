import React from 'react';
import {
  Box, Typography, LinearProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import useManageInfo from '../../data/useManageInfo';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    marginRight: theme.spacing(2),
  },
}));

const AdminInfo = () => {
  const classes = useStyles();
  const { isLoading, data: adminInfo, error } = useManageInfo();

  if (isLoading) return <LinearProgress />;
  if (error) return <>Error</>;

  return (
    <Box display="flex" flexDirection="column" mt={3}>
      <Box display="flex">
        <Typography className={classes.title}>
          Tên:
        </Typography>
        <Typography>
          {adminInfo.name}
        </Typography>
      </Box>

      <Box display="flex">
        <Typography className={classes.title}>
          Giới Tính:
        </Typography>
        <Typography>
          {adminInfo.gender}
        </Typography>
      </Box>

      <Box display="flex">
        <Typography className={classes.title}>
          Địa chỉ:
        </Typography>
        <Typography>
          {adminInfo.address}
        </Typography>
      </Box>

      <Box display="flex">
        <Typography className={classes.title}>
          Ngày sinh:
        </Typography>
        <Typography>
          {adminInfo.birthday}
        </Typography>
      </Box>

      <Box display="flex">
        <Typography className={classes.title}>
          Số điện thoại:
        </Typography>
        <Typography>
          {adminInfo.phone}
        </Typography>
      </Box>

      <Box display="flex">
        <Typography className={classes.title}>
          Email:
        </Typography>
        <Typography>
          {adminInfo.email}
        </Typography>
      </Box>

      <Box display="flex">
        <Typography className={classes.title}>
          User Name:
        </Typography>
        <Typography>
          {adminInfo.username}
        </Typography>
      </Box>
    </Box>
  );
};

export default AdminInfo;
