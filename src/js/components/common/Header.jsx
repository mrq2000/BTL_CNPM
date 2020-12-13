import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from './logo.jpg';

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
  logo: {
    borderRadius: '50%',
    maxWidth: 80,
  }
}));

const Header = () => {
  const APP_NAME = 'HỆ THỐNG QUẢN LÝ KIẾN NGHỊ - PHẢN ÁNH';
  const LOCATION_ADDRESS = 'Tổ  dân phố 7, phường La Khê, quận Hà Đông, thành phố Hà Nội';
  const classes = useStyles();

  return (
    <Box className={classes.container} display="flex">
      <Box display="flex" justifyContent="center" flex={0.3} >
        <img src={logo} className={classes.logo}/>
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
