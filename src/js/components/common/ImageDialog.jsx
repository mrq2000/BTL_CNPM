import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

import useGetImg from '../../data/useGetImg';

const useStyles = makeStyles(() => ({
  img: {
    maxHeight: '80vh',
    width: 'auto',
    objectFit: 'cover',
  },

}));

const ImageDialog = ({ id }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const { data, isLoading } = useGetImg(id);
  const renderImage = () => {
    if (isLoading) return <CircularProgress size={50} />;
    if (data) return <img className={classes.img} alt="img" src={data} />;

    return 'something error';
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle id="confirm-dialog">Image</DialogTitle>
        <DialogContent>
          <Box display="flex" justifyContent="center" alignItems="center">
            {renderImage()}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => setOpen(false)}
            color="default"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        color="primary"
      >
        Hình ảnh
      </Button>
    </>
  );
};

ImageDialog.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ImageDialog;
