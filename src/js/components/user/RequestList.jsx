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
          {Object.keys(data).map((id) => (
            <TableRow key={id}>
              <TableCell size="small" align="left">{data[id].title}</TableCell>
              <TableCell size="small" align="left">{data[id].content}</TableCell>
              <TableCell size="small" align="left">{data[id].datetime}</TableCell>
              <TableCell size="small" align="left">{requestStatus.getTitleStatus(data[id].state)}</TableCell>
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
