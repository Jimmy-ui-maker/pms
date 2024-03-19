import Level1 from "@/(components)/ZallaPassQComponents/100LComs";
import Level2 from "@/(components)/ZallaPassQComponents/200LComs";
import Level3 from "@/(components)/ZallaPassQComponents/300LComs";
import Level4 from "@/(components)/ZallaPassQComponents/400LComs";
import About from "@/(components)/ZallaPassQComponents/About";
import PassQLandingPage from "@/(components)/ZallaPassQComponents/PassQLandingPage";
import React from "react";

export default function page() {
  return (
    <>
      <PassQLandingPage />
      <About />
      <Level1 />
      <Level2 />
      <Level3 />
      <Level4 />
    </>
  );
}
