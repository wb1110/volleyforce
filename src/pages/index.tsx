import Dashboard from "@/containers/dashboard/Dashboard";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { withSSRSession } from "@frontegg/nextjs";
import { GetServerSideProps } from "next";
import { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  return <Dashboard />;
};

export default Page;

// In the `getServerSideProps` method you can get data from an external service to pull relevant data for a logged in user.
// we used the prop `products`. See the commented code for an example.

export const getServerSideProps: GetServerSideProps = withSSRSession(
  async (context, session) => {
    // const { data } = await fetch("{external}/product", {
    //   headers: {
    //     Authorization: "bearer " + session.accessToken,
    //   },
    // });
    return { props: {} };
  }
);
