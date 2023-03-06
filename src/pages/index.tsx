import { GetServerSideProps } from "next";
import { withSSRSession, useAuth } from "@frontegg/nextjs";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Dashboard from "@/containers/dashboard/Dashboard";

export default function MyPage() {
  const { user } = useAuth();

  //baseUrl should be your FRONTEGG_APP_URL from .env.local
  const baseUrl = "http://localhost:3000";

  const logout = () => {
    window.location.href = `${baseUrl}/account/logout`;
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#363740",
      },
      secondary: {
        main: "#FFFFFF",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}

// In the `getServerSideProps` method you can get data from an external service to pull relevant data for a logged in user.
// we used the prop `products`. See the commented code for an example.

export const getServerSideProps: GetServerSideProps = withSSRSession(
  async (context, session) => {
    //     const { data } = await fetch('{external}/product', {
    //      headers: {
    //        Authorization: 'bearer ' + session.accessToken,
    //      },
    //    });
    return { props: {} };
  }
);
