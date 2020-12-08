import React from 'react';
import {
  Box, Typography, LinearProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import useAdminInfo from '../../data/useAdminInfo';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    marginRight: theme.spacing(2),
  },
}));

const AdminInfo = () => {
  const classes = useStyles();
  const { isLoading, data: admins, error } = useAdminInfo();

  if (isLoading) return <LinearProgress />;
  if (error) return <>Error</>;

  return (
    <>
      {
        Object.keys(admins).map((id) => (
          <Box display="flex" flexDirection="column" key={id} mt={3}>
            <Box display="flex">
              <Typography className={classes.title}>
                Tên:
              </Typography>
              <Typography>
                {admins[id].name}
              </Typography>
            </Box>

            <Box display="flex">
              <Typography className={classes.title}>
                Giới Tính:
              </Typography>
              <Typography>
                {admins[id].gender}
              </Typography>
            </Box>

            <Box display="flex">
              <Typography className={classes.title}>
                Địa chỉ:
              </Typography>
              <Typography>
                {admins[id].address}
              </Typography>
            </Box>

            <Box display="flex">
              <Typography className={classes.title}>
                Ngày sinh:
              </Typography>
              <Typography>
                {admins[id].birthday}
              </Typography>
            </Box>

            <Box display="flex">
              <Typography className={classes.title}>
                Số điện thoại:
              </Typography>
              <Typography>
                {admins[id].phone}
              </Typography>
            </Box>

            <Box display="flex">
              <Typography className={classes.title}>
                Email:
              </Typography>
              <Typography>
                {admins[id].email}
              </Typography>
            </Box>

            <Box display="flex">
              <Typography className={classes.title}>
                User Name:
              </Typography>
              <Typography>
                {admins[id].username}
              </Typography>
            </Box>
          </Box>
        ))
      }
    </>
  );
};

export default AdminInfo;
