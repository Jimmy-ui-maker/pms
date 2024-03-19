import { KadunaTable } from "@/models/Nigeria";
import Link from "next/link";
import React from "react";

export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const kaduna = await KadunaTable.find({
    state: "Kaduna State",
    fscience: "Faculty of Science",
    department: "Geology",
  });
  return (
    <section id="report" class="siwesList min-vh-100 section-bg pb-4">
      <div class="container" data-aos="fade-up">
        <div class="section-title ">
          <h2 className=" text-center fw-bold  text-uppercase">
            List of siwes Organization
          </h2>
          <p className=" text-center ">Kaduna State.</p>
        </div>
        <hr />
        <div class="row">
          <div className=" mb-3  d-flex justify-content-center align-items-center">
            <Link className=" btn border-0 " href={"/students/addRecords"}>
              <i className="bi bi-patch-plus "></i>
            </Link>
          </div>
          <hr />

          {kaduna.map((kad) => (
            <div
              key={kad._id}
              class="col-lg-6 py-2"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div class="organization d-flex align-items-start">
                <div class="pic">
                  <img src={kad.imgUrl} class="img-fluid" alt="" />
                </div>
                <div class="organization-info">
                  <h4>{kad.fname}</h4>
                  <span>{kad.orgName}</span>
                  <p>{kad.state} State.</p>
                  <div class="links">
                    <Link href={"/students/details/" + kad._id}>
                      <i class="bi bi-eye"></i>
                    </Link>
                    <Link href="">
                      <i class="bi bi-"></i>
                    </Link>
                    <Link href="">
                      <i class="bi bi-pencil-square"></i>
                    </Link>
                    <Link href="">
                      {" "}
                      <i class="bi bi-trash"></i>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
