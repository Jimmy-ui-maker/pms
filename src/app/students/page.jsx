import About from "@/(components)/StudentComponents/About";
import FAQS from "@/(components)/StudentComponents/FAQS";
import FacultyOfScience from "@/(components)/StudentComponents/FacultyOfScience";
import LogBookFill from "@/(components)/StudentComponents/LogBookFill";
import Projects from "@/(components)/StudentComponents/Projects";
import Report from "@/(components)/StudentComponents/Report";
import WelcomePage from "@/(components)/StudentComponents/WelcomePage";
import React from "react";

export default function page() {
  return (
    <>
      <WelcomePage />
      <About />
      <FacultyOfScience />
      <LogBookFill />
      <Projects />
      <FAQS />
      <Report />
    </>
  );
}
