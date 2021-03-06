import React from 'react';

import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { green, red } from '@material-ui/core/colors';



//material-ui styles
const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
  percent: {
    minWidth: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
});

function StocksUsa() {
  
  const stocks = useSelector((state) => state.fetch.indicators);



  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <h2 style={{ margin: 15 }}>US Stocks</h2>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Ticket</TableCell>
              <TableCell align="right">Current price</TableCell>
              <TableCell align="right" className={classes.percent} container
                direction="row"
                justify="center"
                alignItems="center">Change</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>

            {stocks.map((elem, i) => (
              <TableRow key={i}>

                <TableCell component="th" scope="row">
                  {elem["Meta Data"]["2. Symbol"]}
                </TableCell>

                <TableCell align="right">{elem["Time Series (Daily)"]["2020-08-18"]["4. close"]}</TableCell>


                <TableCell align="right" className={classes.percent}>
                  {(parseFloat(elem["Time Series (Daily)"]["2020-08-18"]["1. open"]) - parseFloat(elem["Time Series (Daily)"]["2020-08-17"]["4. close"])).toFixed(2)}%
                  {((parseFloat(elem["Time Series (Daily)"]["2020-08-18"]["1. open"]) - parseFloat(elem["Time Series (Daily)"]["2020-08-17"]["4. close"])) > 0) ?
                      <ArrowUpward style={{ color: green[500] }}></ArrowUpward> :  <ArrowDownwardIcon style={{ color: red[500] }} />}</TableCell>
              </TableRow>
            ))}


          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default StocksUsa;

