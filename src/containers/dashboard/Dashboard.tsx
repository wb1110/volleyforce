import Layout from "../../containers/dashboard/layout/Layout";
import { Grid, Paper } from "@mui/material";
import React from "react";
import Card from "./Card";
import CourtSchedule from "./CourtSchedule";
import Transactions from "./Transactions";

export default function Dashboard() {
  return (
    <>
      <Layout>
        <Grid container spacing={3}>
          {/* Overdue Payments */}
          <Grid item xs={12} md={6} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Card title="Overdue Payments" value="6" />
            </Paper>
          </Grid>
          {/* Revenue */}
          <Grid item xs={12} md={6} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Card title="Revenue" value={`$105,000`} />
            </Paper>
          </Grid>
          {/* Payroll */}
          <Grid item xs={12} md={6} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Card title="Payroll" value={`$51,500`} />
            </Paper>
          </Grid>
          {/* Expenses */}
          <Grid item xs={12} md={6} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Card title="Payroll" value={`$10,200`} />
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Transactions />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <CourtSchedule />
            </Paper>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}
