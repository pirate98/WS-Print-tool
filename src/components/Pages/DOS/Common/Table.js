import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1479FF",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  padding: 5,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {},
}));

function createData(
  no,
  section,
  before,
  heading,
  after,
  align,
  style,
  cpi,
  not,
  abstract,
  max
) {
  return {
    no,
    section,
    before,
    heading,
    after,
    align,
    style,
    cpi,
    not,
    abstract,
    max,
  };
}

const rows = [
  createData(
    1,
    "Main",
    0,
    "",
    0,
    "Left",
    "None",
    17,
    <Checkbox />,
    <Checkbox />,
    60
  ),
  createData(
    1,
    "Main",
    0,
    "",
    0,
    "Left",
    "None",
    17,
    <Checkbox />,
    <Checkbox />,
    60
  ),
  createData(
    1,
    "Main",
    0,
    "",
    0,
    "Left",
    "None",
    17,
    <Checkbox />,
    <Checkbox />,
    60
  ),
  createData(
    1,
    "Main",
    0,
    "",
    0,
    "Left",
    "None",
    17,
    <Checkbox />,
    <Checkbox />,
    60
  ),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 70, borderRadius: 0 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">SI.No</StyledTableCell>
            <StyledTableCell align="center">
              Order of detail section
            </StyledTableCell>
            <StyledTableCell align="center">Lines Before</StyledTableCell>
            <StyledTableCell align="center">Section Heading</StyledTableCell>
            <StyledTableCell align="center">Lines After</StyledTableCell>
            <StyledTableCell align="center">Align</StyledTableCell>
            <StyledTableCell align="center">CPI</StyledTableCell>
            <StyledTableCell align="center">Don't Print</StyledTableCell>
            <StyledTableCell align="center">Print Abstract</StyledTableCell>
            <StyledTableCell align="center">Max Chars</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.no}>
              {/* <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell> */}
              <StyledTableCell align="center">{row.no}</StyledTableCell>
              <StyledTableCell align="center">{row.section}</StyledTableCell>
              <StyledTableCell align="center">{row.before}</StyledTableCell>
              <StyledTableCell align="center">{row.heading}</StyledTableCell>
              <StyledTableCell align="center">{row.after}</StyledTableCell>
              <StyledTableCell align="center">{row.style}</StyledTableCell>
              <StyledTableCell align="center">{row.cpi}</StyledTableCell>
              <StyledTableCell align="center">{row.not}</StyledTableCell>
              <StyledTableCell align="center">{row.abstract}</StyledTableCell>
              <StyledTableCell align="center">{row.max}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
