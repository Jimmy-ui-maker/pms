"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <section className="hero w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="container text-center">
        <h1>Current Date and Time</h1>
        <h2 className=" fs-4 text-white fw-semibold align-items-center mt-3">
          {dateTime.toLocaleString()}
        </h2>

        <img
          data-aos="fade-up"
          data-aos-delay="200"
          src="/siwes/logo.png"
          alt="kasu-logo"
        />
        <div data-aos="fade-up contain" data-aos-delay="300">
          <h1>Placement Management System</h1>
          <h2 className=" mt-2">Kaduna State University, KASU.</h2>
          <Link className=" btn " href={"/students"}>
            Stundents
          </Link>
          <Link className=" btn  " href={"/admin"}>
            Admin
          </Link>
        </div>
      </div>
    </section>
  );
}
