import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ServicesList from "../containers/services/ServicesList";
import Layout from "@/containers/dashboard/layout/Layout";

function Services() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <ServicesList />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Services;
