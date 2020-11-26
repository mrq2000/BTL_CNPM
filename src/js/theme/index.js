import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f67f30',
    },
    secondary: {
      main: '#fbd5cd',
    },
  },
  overrides: {
    MuiTab: {
      wrapper: {
        alignItems: 'flex-start',
      },
      root: {
        '&.Mui-selected': {
          color: '#f68230 !important',
        },
      },
    },
  },
});

export default theme;
