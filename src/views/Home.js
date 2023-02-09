import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Learn from "../components/sections/Learn";
import GetInvolved from "../components/sections/GetInvolved";
import Support from "../components/sections/Support";

const Home = () => {
  return (
    <>
      <Hero />
      <About topDivider />
      <Learn invertMobile topDivider />
      <GetInvolved topDivider />
      <Support topDivider />
    </>
  );
};

export default Home;
