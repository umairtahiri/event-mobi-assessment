import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  getFirstFileName,
  getFilesCount,
  getFileLanguages,
} from "../../utils/helperFunctions";
import { Gist } from "../../utils/types";

type GistTablePropTypes = {
  rows: Gist[];
};

export default function GistTable({ rows }: GistTablePropTypes) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>File Name</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Files Count</TableCell>
            <TableCell align="center">Languages</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: Gist) => {
            const { id, files = {}, description = "" } = row;
            const firstFileName = getFirstFileName(files);
            const filesCount = getFilesCount(files);
            const languages = getFileLanguages(files);
            return (
              <TableRow
                key={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {firstFileName}
                </TableCell>
                <TableCell align="center">{description}</TableCell>
                <TableCell align="center">{filesCount}</TableCell>
                <TableCell align="center">{languages.join(" , ")}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
