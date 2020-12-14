import React from 'react';
import {
  Box, Typography, LinearProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import useThirdPartyInfo from '../../data/useThirdPartyInfo';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    marginRight: theme.spacing(2),
  },
  img: {
    marginRight: theme.spacing(3),
    height: theme.spacing(30),
    width: theme.spacing(30),
    objectFit: 'cover',
  },
}));

const AdminInfo = () => {
  const classes = useStyles();
  const { isLoading, data: admins, error } = useThirdPartyInfo();

  if (isLoading) return <LinearProgress />;
  if (error) return <>Error</>;

  return (
    <>
      {
        Object.keys(admins).map((id) => (
          <Box display="flex" flexDirection="row" mt={3}>
            <img alt="logo" src={admins[id].img} className={classes.img} />

            <Box display="flex" flexDirection="column">
              <Box display="flex">
                <Typography className={classes.title}>
                  Tổ chức:
                </Typography>
                <Typography>
                  {admins[id].organization}
                </Typography>
              </Box>

              <Box display="flex">
                <Typography className={classes.title}>
                  Người phụ trách:
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
                  Chức vụ:
                </Typography>
                <Typography>
                  {admins[id].position}
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
            </Box>
          </Box>
        ))
      }
    </>
  );
};

export default AdminInfo;
