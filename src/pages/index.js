import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import DataGrid from "../components/data-grid/data-grid";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <DataGrid
      url={"http://www.linticket.no/json/Kvarteret/index.php3"}
      dataKeys={[
        "Spillested",
        "Navn",
        "Sted",
        "Dato",
        "Start Tid",
        "Slutt Tid",
        "Type Navn"
      ]}
    />
  </Layout>
);

export default IndexPage;
