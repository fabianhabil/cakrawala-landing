import Head from "next/head";
import React from "react";
import Section1 from "../component/Section1";
import Section2 from "../component/Section2";
import Section3 from "../component/Section3";
import Section4 from "../component/Section4";
import Section5 from "../component/Section5";

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
      <div id="pricing">
        <Section4 />
      </div>
      <div id="contact">
        <Section5 />
      </div>
    </>
  );
};

export default Index;
