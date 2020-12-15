/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Table, TableContainer, TableHead, TableRow, TableCell, Paper, DialogContent,
  TableBody, LinearProgress, Button, Dialog, DialogTitle, TextField, Box,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryCache } from 'react-query';
import firebase from 'firebase';
import { useSnackbar } from 'notistack';

import PopoverText from '../common/PopoverText';
import useAllRequest from '../../data/useAllRequest';
import requestStatus from '../../enums/requestStatus';
import { timeNow, formatDateTime } from '../../helpers/dayjs';
import ImageDialog from '../common/ImageDialog';

const FeedBack = ({ id, title }) => {
  const { enqueueSnackbar } = useSnackbar();
  const cache = useQueryCache();

  const [open, setOpen] = useState(false);
  const {
    register,
    errors,
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });

  const [feedBack, { isLoading: loadingFeedback }] = useMutation(async (content) => {
    const response = await firebase.database().ref(`/request/${id}`).update({
      state: requestStatus.DONE,
      feedback: {
        content,
        datetime: timeNow,
      },
    });
    return response;
  }, {
    onError: () => {
      enqueueSnackbar('Có Lỗi Xảy Ra, Vui Lòng Kiểm Tra Lại', { variant: 'error' });
    },
    onSuccess: () => {
      enqueueSnackbar('Phản hồi thành công', { variant: 'success' });
      cache.invalidateQueries('all requests');
    },
  });

  const handleFeedBack = (data) => {
    feedBack(data.title);
  };

  return (
    <>
      <Dialog onClose={() => setOpen(false)} open={open} fullWidth maxWidth="sm">
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <TextField
            label="Trả lời"
            multiline
            variant="outlined"
            fullWidth
            rows={4}
            inputRef={register({ required: true })}
            name="title"
            error={!!errors.title}
            helperText={errors.title && 'Không được để trống'}
          />
          <Box mt={3} mb={2} display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              disabled={loadingFeedback}
              onClick={handleSubmit(handleFeedBack)}
            >
              Trả lời
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

      <Button onClick={() => setOpen(true)} variant="contained">
        Phản hồi
      </Button>
    </>
  );
};

const AdminRequestList = () => {
  const { data, isLoading } = useAllRequest(10);
  const Header = (
    <TableHead>
      <TableRow>
        <TableCell size="medium" align="left">Tiêu đề </TableCell>
        <TableCell size="medium" align="left">Nội dung</TableCell>
        <TableCell size="medium" align="left">Thời gian gửi</TableCell>
        <TableCell size="medium" align="left">Người gửi</TableCell>
        <TableCell size="medium" align="left">Tình trạng</TableCell>
        <TableCell size="medium" align="center">Hình ảnh</TableCell>
        <TableCell size="medium" align="left" />
      </TableRow>
    </TableHead>
  );

  const Body = () => {
    if (data) {
      return (
        <TableBody>
          {Object.keys(data).reverse().map((id) => (
            <TableRow key={id}>
              <TableCell size="medium" align="left">{data[id].title}</TableCell>
              <TableCell size="medium" align="left">
                <PopoverText text={data[id].content} />
              </TableCell>
              <TableCell size="medium" align="left">
                {formatDateTime(data[id].datetime)}
              </TableCell>
              <TableCell size="medium" align="left">{data[id].user}</TableCell>
              <TableCell size="medium" align="left">
                {requestStatus.getTitleStatus(data[id].state)}
              </TableCell>
              <TableCell size="medium" align="center">
                {
                  data[id].imgId ? <ImageDialog id={data[id].imgId} /> : null
                }
              </TableCell>
              <TableCell size="medium" align="left">
                {
                  data[id].state === requestStatus.NEW
                    ? <FeedBack id={id} title={data[id].title} />
                    : null
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      );
    }
    return <></>;
  };

  if (isLoading) return <LinearProgress />;
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        {Header}
        {Body()}
      </Table>
    </TableContainer>
  );
};

export default AdminRequestList;
