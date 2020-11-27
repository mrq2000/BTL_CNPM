import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#fbd5cd',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  italic: {
    fontStyle: 'italic',
  },
}));

const Header = () => {
  const APP_NAME = 'HỆ THỐNG QUẢN LÝ KIẾN NGHỊ - PHẢN ÁNH';
  const LOCATION_ADDRESS = 'tổ  dân phố 7, phường La Khê, quận Hà Đông, thành phố Hà Nội';
  const classes = useStyles();

  return (
    <Box className={classes.container} display="flex">
      <Box>
        Logo
      </Box>
      <Box display="flex" justify="center" alignItems="center" flexDirection="column" flex={1}>
        <Typography variant="h4" align="center">
          {APP_NAME}
        </Typography>
        <Typography variant="body2" align="center" className={classes.italic}>
          {LOCATION_ADDRESS}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
