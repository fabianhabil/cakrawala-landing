import { Hidden } from "@mui/material";
import Head from "next/head";
import React from "react";
import Navbar from "../component/Navbar";
import Section1 from "../component/Section1";
import Section2 from "../component/Section2";
import Section3 from "../component/Section3";

const Index = () => {
  return (
    <>
      <Head>
        <title>Cakrawala</title>
      </Head>
      <div id="home">
        <Section1 />
      </div>
      <div id="about">
        <Section2 />
      </div>
      <div id="facilities">
        <Section3 />
      </div>
    </>
  );
};

export default Index;
