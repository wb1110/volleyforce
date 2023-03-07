import Dashboard from "@/containers/dashboard/Dashboard";
import Layout from "@/containers/dashboard/layout/Layout";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  return <Dashboard />;
};

export default Page;
