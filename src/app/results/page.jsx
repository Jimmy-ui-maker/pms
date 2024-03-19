import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <section className="resultPage w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="container text-center">
        <div data-aos="fade-up contain" data-aos-delay="300">
          <h1>Result Management System</h1>
          <h2 className=" mt-2">Kaduna State University, KASU.</h2>
          <Link className=" btn " href={"/results/generate"}>
            Generate Result
          </Link>
          <Link className=" btn  " href={"/results/checks"}>
            Check Result
          </Link>
        </div>
      </div>
    </section>
  );
}
