import { PassQTable } from "@/models/PassQ";
import React from "react";

export default async function Level4() {
  const level4 = await PassQTable.find({ level: "400L" }, null, {
    sort: { _id: -1 },
    limit: 4,
  });
  return (
    <section className="levelCard min-vh-100">
      <div className="container py-4">
        <div class="section-title">
          <h2 className="text-center ">Level 4 Current Pass Q</h2>
        </div>
        <hr />

        <div className="row g-4 align-items-center text-lg-start ">
          {level4.map((four) => (
            <div key={four._id} className="col-6 col-lg-3 ">
              <div className="card ">
                <img src={four.imgUrl} className="card-img-top rounded-2  " />
                <hr />
                <div className="bText">
                  <p className="mb-1">
                    <strong className=" text-uppercase">Course Code:</strong>{" "}
                    {four.cCode}
                  </p>
                  <p className=" mb-1">
                    <strong className=" text-uppercase">Course Title:</strong>{" "}
                    {four.cTitle}
                  </p>
                  <p className=" mb-1">
                    <strong className=" text-uppercase">Section:</strong>{" "}
                    {four.section}
                  </p>
                  <p className=" mb-1">
                    <strong className=" text-uppercase">Type:</strong>{" "}
                    {four.type}
                  </p>
                  <div className=" text-end">
                    <small>To save the image, right click on it.</small>
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
