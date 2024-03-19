import { KadunaTable } from "@/models/Nigeria";
import Link from "next/link";
import React from "react";

export default async function Organization() {
  const kaduna = await KadunaTable.find({}, null, {
    sort: { _id: -1 },
    limit: 4,
  });
  return (
    <section id="siwesList" className="siwesList section-bg pb-4">
      <div className="container" data-aos="fade-up">
        <div className="section-title ">
          <h2 className=" text-center fw-bold  text-uppercase">
            Fiew List of siwes Organization
          </h2>
          <p className=" text-center ">Kaduna State.</p>
        </div>
        <hr />
        <div className="row">
          {kaduna.map((kad) => (
            <div
              key={kad._id}
              className="col-lg-6 py-2"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="organization me-2 d-flex align-items-start">
                <div className="pic   ">
                  <img src={kad.imgUrl} className="" alt="" />
                </div>
                <div className="member-info">
                  <h4>{kad.fname}</h4>
                  <span>{kad.orgName}</span>
                  <p>{kad.state} State.</p>
                  <div className="links">
                    <Link href={"/details/" + kad._id}>
                      <i className="bi bi-eye"></i>
                    </Link>
                    <Link href="">
                      <i className="bi bi-"></i>
                    </Link>
                    <Link href="">
                      <i className="bi bi-pencil"></i>
                    </Link>
                    <Link href="">
                      {" "}
                      <i className="bi bi-trash"></i>{" "}
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
