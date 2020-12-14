import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';

const ConfirmDialog = ({
  title, content, open, handleClose, onConfirm,
}) => (
  <Dialog
    open={open}
    onClose={() => handleClose()}
    aria-labelledby="confirm-dialog"
    fullWidth
    maxWidth="sm"
  >
    <DialogTitle id="confirm-dialog">{title}</DialogTitle>
    <DialogContent>{content}</DialogContent>
    <DialogActions>
      <Button
        variant="contained"
        onClick={() => handleClose()}
        color="default"
      >
        No
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          handleClose();
          onConfirm();
        }}
        color="secondary"
      >
        Yes
      </Button>
    </DialogActions>
  </Dialog>
);

ConfirmDialog.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ConfirmDialog;
