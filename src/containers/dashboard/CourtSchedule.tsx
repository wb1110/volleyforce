import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id: number, time: string, court: string, user: string) {
  return { id, time, court, user };
}

const rows = [
  createData(0, "5:00 p.m.", "Court 1", "14 Black"),
  createData(1, "5:00 p.m.", "Court 2", "14 Blue"),
  createData(2, "5:00 p.m.", "Court 3", "14 White"),
  createData(3, "5:00 p.m.", "Court 4", "15 Black"),
  createData(4, "6:00 p.m.", "Court 1", "15 Blue"),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function CourtSchedule() {
  return (
    <React.Fragment>
      <Title>Court Schedule</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Court</TableCell>
            <TableCell align="right">User</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.court}</TableCell>
              <TableCell align="right">{row.user}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more reservations
      </Link>
    </React.Fragment>
  );
}
