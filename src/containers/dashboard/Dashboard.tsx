import Box from "@mui/material/Box";
import Layout from "../../containers/dashboard/layout/Layout";

function DashboardContent() {
  return (
    <Box sx={{ display: "flex" }}>
      <Layout>
        <p>Test</p>
      </Layout>
    </Box>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
