import React from 'react';
import {
  Table, TableContainer, TableHead, TableRow, TableCell, Paper,
} from '@material-ui/core';

const AdminRequestList = () => {
  const Header = (
    <TableHead>
      <TableRow>
        <TableCell size="medium" align="center">Thời gian gửi</TableCell>
        <TableCell size="medium" align="center">Tiêu đề </TableCell>
        <TableCell size="medium" align="center">Người gửi</TableCell>
        <TableCell size="medium" align="center">Tình trạng</TableCell>
      </TableRow>
    </TableHead>
  );
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        {Header}
      </Table>
    </TableContainer>
  );
};

export default AdminRequestList;
