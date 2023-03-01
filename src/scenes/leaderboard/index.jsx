import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";




const Leaderboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    function createData(teamName, points, change, lastScore) {
        return { teamName, points, change, lastScore };
      }
      
      const rows = [
        createData('Daniel Han, Chansup Byun', 21, 1, 45),
        createData('Ice cream sandwich', 20, -1, 46),
        createData('Eclair', 19, 2, 47),
        createData('Cupcake', 18, -1, 48),
        createData('Gingerbread', 17, 0, 50),
      ];
  
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Team</TableCell>
              <TableCell align="right">Points</TableCell>
              <TableCell align="right">Weekly Change in Position</TableCell>
              <TableCell align="right">Last Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.teamName}
                </TableCell>
                <TableCell align="right">{row.points}</TableCell>
                <TableCell align="right">{row.change}</TableCell>
                <TableCell align="right">{row.lastScore}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  
  export default Leaderboard;
  