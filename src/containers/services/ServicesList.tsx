import * as React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { Button } from "@mui/material";
import AddNewService from "./AddNewService";
import user from "@/data/mockData";
import useSWR from "swr";

export default function ServicesList() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("/api/services", fetcher);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  console.log(data, error, "data");

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
          {user.services.map((service) => (
            <TableRow key={service.id}>
              <TableCell>{service.serviceName}</TableCell>
              <TableCell>{service.serviceType}</TableCell>
              <TableCell align="right">{`$${service.price}`}</TableCell>
              <TableCell align="center">
                <MoreHorizIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
