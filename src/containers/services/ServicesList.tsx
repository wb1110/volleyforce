import fetcher from "@/pages/api/fetcher";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import useSWR from "swr";
import AddNewService from "./AddNewService";
import Title from "./Title";

export default function ServicesList() {
  const { data, error } = useSWR("/api/services", fetcher);
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
            <TableCell align="right">Price</TableCell>
            <TableCell align="center">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            ? data.map((service) => (
                <TableRow key={service.id}>
                  <TableCell>{service.name}</TableCell>
                  <TableCell>{service.type}</TableCell>
                  <TableCell align="right">{`$${service.price}`}</TableCell>
                  <TableCell align="center">
                    <MoreHorizIcon />
                  </TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
