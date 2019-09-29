import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, useTheme } from '@material-ui/core';
import { Layout } from '../components/Layout';
import { PageContainer } from '../components/PageContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { investorsCollection } from '../utils/firebase-collections/investors.collection';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  cell: {
    color: theme.palette.primary.contrastText,
  },
  head: {
    background: theme.palette.primary,
  },
}));

function createData(
  listing,
  type,
  last,
  average,
  blocks,
  total,
  value,
  profit,
  percentage,
) {
  return {
    listing,
    type,
    last,
    average,
    blocks,
    total,
    value,
    profit,
    percentage,
  };
}

export const Portfolio = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [rowsData, setRowsData] = React.useState([]);

  useEffect(() => {
    getInvestors();
  }, []);

  const getInvestors = async () => {
    const res = await investorsCollection.getPortfolios(49);
    var rows = [];
    res.forEach(element => {
      rows.push(
        createData(
          element.name,
          element.type,
          102.4,
          101.21,
          20,
          '2,022.70',
          '2,177.23',
          99.63,
          '4.93%',
        ),
      );
    });
    setRowsData(rows);
  };

  return (
    <Layout>
      <PageContainer style={{ spacing: theme.spacing(3) }}>
        <Container>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead style={{ background: theme.palette.primary.main }}>
                <TableRow>
                  <TableCell className={classes.cell}>Listing</TableCell>
                  <TableCell className={classes.cell} align="right">
                    Type
                  </TableCell>
                  <TableCell className={classes.cell} align="right">
                    Last Price
                  </TableCell>
                  <TableCell className={classes.cell} align="right">
                    Average Price
                  </TableCell>
                  <TableCell className={classes.cell} align="right">
                    Shares
                  </TableCell>
                  <TableCell className={classes.cell} align="right">
                    Total Cost
                  </TableCell>
                  <TableCell className={classes.cell} align="right">
                    Market Value
                  </TableCell>
                  <TableCell className={classes.cell} align="right">
                    Profit
                  </TableCell>
                  <TableCell className={classes.cell} align="right">
                    % Profit
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsData.map(row => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.listing}
                    </TableCell>
                    <TableCell align="right">{row.type}</TableCell>
                    <TableCell align="right">{row.last}</TableCell>
                    <TableCell align="right">{row.average}</TableCell>
                    <TableCell align="right">{row.blocks}</TableCell>
                    <TableCell align="right">{row.total}</TableCell>
                    <TableCell align="right">{row.value}</TableCell>
                    <TableCell align="right">{row.profit}</TableCell>
                    <TableCell align="right">{row.percentage}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={9} />
                </TableRow>
                <TableRow>
                  <TableCell colSpan={5}>TOTAL</TableCell>
                  <TableCell colSpan={1} align="right">
                    4,323.12
                  </TableCell>
                  <TableCell colSpan={1} align="right">
                    4,323.12
                  </TableCell>
                  <TableCell colSpan={1} align="right">
                    -4,323.12
                  </TableCell>
                  <TableCell colSpan={1} align="right">
                    -11.51%
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Container>
      </PageContainer>
    </Layout>
  );
};
