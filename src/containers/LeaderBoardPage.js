import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
    flex-direction: column;
    padding-left: 100px;
    padding-right: 100px;
`;

const styles = theme => ({
  root: {
    width: '80%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, position, points) {
  id += 1;
  return { id, name, position, points};
}

const rows = [
  createData('John Doe', 1, 400),
  createData('Cutie Mcbooty', 2, 300),
  createData('Vishnu', 3, 200),
  createData('Danny', 4, 100),
  createData('Elisabeth', 5, 50),
];

function LeaderBoardPage(props) {
  const { classes } = props;

  return (
      <Wrapper>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.position}</TableCell>
              <TableCell align="right">{row.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </Wrapper>
  );
}

LeaderBoardPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeaderBoardPage);
