import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, principal, amount) {
  return { id, date, name, principal, amount };
}

const rows = [
  createData(0, '28 Jul, 2021', 'Diego Prats', 'de5xo-ggpwz-skaxk-mcmen-ewovl-xaas2-4hv6m-5zvjs-omjgs-uh5lt-dae', 312),
  createData(1, '27 Jul, 2021', 'Diego Prats', 'de5xo-ggpwz-skaxk-mcmen-ewovl-xaas2-4hv6m-5zvjs-omjgs-uh5lt-dae', 311),
  createData(2, '26 Jul, 2021', 'Diego Prats', 'de5xo-ggpwz-skaxk-mcmen-ewovl-xaas2-4hv6m-5zvjs-omjgs-uh5lt-dae', 310),
  createData(3, '25 Jul, 2021', 'Diego Prats', 'de5xo-ggpwz-skaxk-mcmen-ewovl-xaas2-4hv6m-5zvjs-omjgs-uh5lt-dae', 309),
  createData(4, '24 Jul, 2021', 'Diego Prats', 'de5xo-ggpwz-skaxk-mcmen-ewovl-xaas2-4hv6m-5zvjs-omjgs-uh5lt-dae', 308),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Updates() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Updates</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Timestamp</TableCell>
            <TableCell>Updater</TableCell>
            <TableCell>Principal</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <a href={ 'https://ic.rocks/principal/' + row.principal}> Principal</a>
                </TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more updates
        </Link>
      </div>
    </React.Fragment>
  );
}