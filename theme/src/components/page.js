import React from "react";
import Layout from "./layout";
import { Container } from "theme-ui";

const Page = ({ children }) => {
  return (
    <Layout>
      <Container>{children}</Container>
    </Layout>
  );
};

export default Page;
