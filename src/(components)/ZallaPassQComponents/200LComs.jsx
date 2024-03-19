import { PassQTable } from "@/models/PassQ";
import React from "react";

export default async function Level2() {
  const level2 = await PassQTable.find({ level: "200L" }, null, {
    sort: { _id: -1 },
    limit: 4,
  });
  return (
    <section className="levelCard min-vh-100">
      <div className="container py-4">
        <div class="section-title">
          <h2 className="text-center ">Level 2 Current Pass Q</h2>
        </div>
        <hr />

        <div className="row g-4 align-items-center text-lg-start ">
          {level2.map((two) => (
            <div key={two._id} className="col-6 col-lg-3 ">
              <div className="card ">
                <img src={two.imgUrl} className="card-img-top rounded-2  " />
                <hr />
                <div className="bText">
                  <p className="mb-1">
                    <strong className=" text-uppercase">Course Code:</strong>{" "}
                    {two.cCode}
                  </p>
                  <p className=" mb-1">
                    <strong className=" text-uppercase">Course Title:</strong>{" "}
                    {two.cTitle}
                  </p>
                  <p className=" mb-1">
                    <strong className=" text-uppercase">Section:</strong>{" "}
                    {two.section}
                  </p>
                  <p className=" mb-1">
                    <strong className=" text-uppercase">Type:</strong>{" "}
                    {two.type}
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
