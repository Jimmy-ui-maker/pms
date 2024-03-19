import { PassQTable } from "@/models/PassQ";
import React from "react";

export default async function page() {
  const level1 = await PassQTable.find({ level: "100L" }, null, {
    sort: { _id: -1 },
  });
  return (
    <section className="levelCard min-vh-100">
      <div className="container py-4">
        <div class="section-title">
          <h2 className="text-center "> All Level 1 Pass Q</h2>
        </div>
        <div className=" bg-white pb-1 my-4"></div>

        <div className="row g-4 align-items-center text-lg-start ">
          {level1.map((one) => (
            <div key={one._id} className="col-6 col-lg-3 ">
              <div className="card ">
                <img src={one.imgUrl} className="card-img-top rounded-2  " />
                <hr />
                <div className="bText">
                  <p className="mb-1">
                    <strong className=" text-uppercase">Course Code:</strong>{" "}
                    {one.cCode}
                  </p>
                  <p className=" mb-1">
                    <strong className=" text-uppercase">Course Title:</strong>{" "}
                    {one.cTitle}
                  </p>
                  <p className=" mb-1">
                    <strong className=" text-uppercase">Section:</strong>{" "}
                    {one.section}
                  </p>
                  <p className=" mb-1">
                    <strong className=" text-uppercase">Type:</strong>{" "}
                    {one.type}
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
