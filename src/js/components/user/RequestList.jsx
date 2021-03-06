/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Table, TableContainer, TableHead, TableRow, TableCell, Paper, LinearProgress, TableBody, Button,
  Dialog, DialogTitle, DialogContent,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import useGetRequest from '../../data/useGetRequest';
import requestStatus from '../../enums/requestStatus';
import { formatDateTime } from '../../helpers/dayjs';
import ImageDialog from '../common/ImageDialog';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    minWidth: theme.spacing(3),
  },
  tableContainer: {
    marginBottom: theme.spacing(3),
  },
}));

const FeedBack = ({ data }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Dialog onClose={() => setOpen(false)} open={open} fullWidth maxWidth="md">
        <DialogTitle>Trả lời từ Tổ Trưởng</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table size="medium">
              <TableRow>
                <TableCell className={classes.title}>
                  Nội dung:
                </TableCell>
                <TableCell>
                  {data.content}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className={classes.title}>
                  Ngày trả lời:
                </TableCell>
                <TableCell>
                  {formatDateTime(data.datetime)}
                </TableCell>
              </TableRow>
            </Table>
          </TableContainer>
        </DialogContent>
      </Dialog>

      <Button onClick={() => setOpen(true)}>Chi tiết</Button>
    </>
  );
};

const RequestList = () => {
  const { isLoading, data, error } = useGetRequest();
  if (isLoading) return <LinearProgress style={{ width: '100%' }} />;
  if (error) return <>Error</>;

  const Header = (
    <TableHead>
      <TableRow>
        <TableCell size="medium" align="left">Tiêu dề</TableCell>
        <TableCell size="medium" align="left">Nội dung</TableCell>
        <TableCell size="medium" align="left">Ngày đăng</TableCell>
        <TableCell size="medium" align="left">Trạng thái</TableCell>
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
              <TableCell size="=medium" align="left">{data[id].title}</TableCell>
              <TableCell size="=medium" align="left">{data[id].content}</TableCell>
              <TableCell size="=medium" align="left">{formatDateTime(data[id].datetime)}</TableCell>
              <TableCell size="=medium" align="left">{requestStatus.getTitleStatus(data[id].state)}</TableCell>
              <TableCell size="=medium" align="center">
                {
                  data[id].imgId ? <ImageDialog id={data[id].imgId} /> : null
                }
              </TableCell>
              <TableCell size="medium" align="left">
                {
                  data[id].state === requestStatus.DONE
                    ? <FeedBack data={data[id].feedback} />
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

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        {Header}
        {Body()}
      </Table>
    </TableContainer>
  );
};

export default RequestList;
