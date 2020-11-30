import React from 'react';
import { Avatar, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#fcf1f1',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  marginRight: {
    marginRight: theme.spacing(1),
  },
}));

const UserInfo = () => {
  const name = 'Nguyen Van A';
  const classes = useStyles();

  return (
    <Box className={classes.container} display="flex" alignItems="center" justifyContent="center">
      <Avatar className={classes.marginRight}>H</Avatar>
      <Typography variant="body1">
        {name}
      </Typography>
    </Box>
  );
};

export default UserInfo;
