import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { Button } from "@mui/material";
import AddNewService from "./AddNewService";

// Generate Order Data
function createData(
  id: number,
  serviceName: string,
  serviceType: string,
  amount: number
) {
  return { id, serviceName, serviceType, amount };
}

const rows = [
  createData(0, "Club Dues", "Club", 500.0),
  createData(1, "Skills Clinic", "Clinics/Camps", 50.0),
  createData(2, "Summer Camp", "Clinics/Camps", 200.0),
  createData(3, "Court Rental", "Rental", 50.0),
  createData(4, "Spring League 1", "League", 500.0),
];

export default function ServicesList() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <React.Fragment>
      <section style={{ display: "flex", justifyContent: "space-between" }}>
        <Title>Services Offered</Title>
        <Button variant="contained" size="small" onClick={handleOpen}>
          Add New Service
        </Button>
        <AddNewService open={open} setOpen={setOpen} />
      </section>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Service Name</TableCell>
            <TableCell>Service Type</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.serviceName}</TableCell>
              <TableCell>{row.serviceType}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
