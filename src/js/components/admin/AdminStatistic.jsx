import React, { useMemo, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid, TableContainer, Table, Paper, TableRow, TableCell, FormControl, InputLabel,
  Select, MenuItem, Box,
} from '@material-ui/core';
import { Pie } from 'react-chartjs-2';

import useStatistic from '../../data/useStatistic';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    minWidth: theme.spacing(3),
  },
  new: {
    fontWeight: 'bold',
    color: 'red',
  },
  done: {
    fontWeight: 'bold',
    color: '#1ba01b',
  },
  tableContainer: {
    marginTop: theme.spacing(3),
  },
  quarter: {
    width: theme.spacing(8),
  },
}));

const AdminStatistic = () => {
  const classes = useStyles();
  const [quarter, setQuarter] = useState(4);
  const [year, setYear] = useState(2020);

  const rangeDate = useMemo(() => {
    let dateStart = '';
    let dateEnd = '';

    switch (quarter) {
      case 1:
        dateStart = `${year}-01-01`;
        dateEnd = `${year}-03-31`;
        break;
      case 2:
        dateStart = `${year}-04-01`;
        dateEnd = `${year}-06-30`;
        break;
      case 3:
        dateStart = `${year}-07-01`;
        dateEnd = `${year}-09-30`;
        break;
      case 4:
        dateStart = `${year}-10-01`;
        dateEnd = `${year}-12-31`;
        break;
      default:
        break;
    }

    return [dateStart, dateEnd];
  }, [quarter, year]);

  const { data } = useStatistic(rangeDate[0], rangeDate[1]);

  const test = useMemo(() => ({
    labels: [
      'Mới Tiếp Nhận',
      'Đã Trả Lời',
    ],
    datasets: [{
      data: [data ? data[0] : 0, data ? data[1] : 0],
      backgroundColor: [
        '#FF6384',
        '#1ba01b',
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#1ba01b',
      ],
    }],
  }), [data]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Box display="flex" justifyContent="space-around">
          <FormControl variant="outlined">
            <InputLabel>Qúy</InputLabel>
            <Select
              value={quarter}
              onChange={(e) => setQuarter(e.target.value)}
              label="Qúy"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel>Năm</InputLabel>
            <Select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              label="Năm"
            >
              <MenuItem value={2020}>2020</MenuItem>
              <MenuItem value={2021}>2021</MenuItem>
              <MenuItem value={2022}>2022</MenuItem>
              <MenuItem value={2023}>2023</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table size="medium">
            <TableRow>
              <TableCell className={classes.title}>
                Mới tiếp nhận:
              </TableCell>
              <TableCell className={classes.new}>
                {data ? data[0] : 0}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className={classes.title}>
                Đã phản hồi:
              </TableCell>
              <TableCell className={classes.done}>
                {data ? data[1] : 0}
              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </Grid>

      <Grid item xs={8}>
        <Pie data={test} />
      </Grid>
    </Grid>
  );
};

export default AdminStatistic;
