import type { AppProps } from "next/app";
import { withFronteggApp } from "@frontegg/nextjs";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { ThemeProvider, createTheme } from "@mui/material";
import Layout from "@/containers/dashboard/layout/Layout";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP>;
// & { getLayout?: (page: ReactElement) => ReactNode; }

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  // const getLayout = Component.getLayout ?? ((page) => page);
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default withFronteggApp(MyApp, {
  hostedLoginBox: true,
  authOptions: {
    // keepSessionAlive: true // Uncomment this in order to maintain the session alive
  },
});
