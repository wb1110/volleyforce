import Footer from "./Footer";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

export default function Layout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {/* {currentLink === 'dashboard' && <DashboardSelected />}
            {currentLink === 'services' && <Services />} */}
          {/* <Copyright sx={{ pt: 4 }} /> */}
          {children}
        </Container>

        <Footer />
      </Box>
      {/* <main>{children}</main> */}
    </Box>
  );
}
