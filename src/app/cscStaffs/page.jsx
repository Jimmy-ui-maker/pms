import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <section className="staffsPage w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="container text-center">
        <div data-aos="fade-up contain" data-aos-delay="300">
          <h1>Computer Science Staffs Management System</h1>
          <h2 className=" mt-2">Kaduna State University, KASU.</h2>
          <Link className=" btn fw-semibold " href={"/cscStaffs/teachingStaffs"}>
            Teaching Staffs
          </Link>
          <Link className=" btn fw-semibold " href={"/cscStaffs/nonteachingStaffs"}>
          Non-teaching Staffs
          </Link>
        </div>
      </div>
    </section>
  );
}
