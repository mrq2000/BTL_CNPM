import React from 'react';
import {
  Table, TableContainer, TableHead, TableRow, TableCell, Paper, LinearProgress, TableBody,
} from '@material-ui/core';

import useGetRequest from '../../data/useGetRequest';
import requestStatus from '../../enums/requestStatus';

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
      </TableRow>
    </TableHead>
  );

  const Body = () => {
    if (data) {
      return (
        <TableBody>
          {data ? data.map((request, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <TableRow key={index}>
              <TableCell size="small" align="left">{request.title}</TableCell>
              <TableCell size="small" align="left">{request.content}</TableCell>
              <TableCell size="small" align="left">{request.datetime}</TableCell>
              <TableCell size="small" align="left">{requestStatus.getTitleStatus(request.state)}</TableCell>
            </TableRow>
          )) : null}
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
