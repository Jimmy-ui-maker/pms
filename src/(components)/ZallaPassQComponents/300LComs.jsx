import { PassQTable } from '@/models/PassQ';
import React from 'react'

export default async function Level3() {
  const level3 = await PassQTable.find({ level: "300L" }, null, {
    sort: { _id: -1 },
    limit: 4,
  });
  return (
    <section className="levelCard min-vh-100">
      <div className="container py-4">
        <div class="section-title">
          <h2 className="text-center ">Level 3 Current Pass Q</h2>
        </div>
        <hr />

        <div className="row g-4 align-items-center text-lg-start ">
          {level3.map((three) => (
            <div key={three._id} className="col-6 col-lg-3 ">
              <div className="card ">
                <img src={three.imgUrl} className="card-img-top rounded-2  " />
                <hr />
                <div className="bText">
                  <p className="mb-1">
                    <strong className=" text-uppercase">Course Code:</strong>{" "}
                    {three.cCode}
                  </p>
                  <p className=" mb-1">
                    <strong className=" text-uppercase">Course Title:</strong>{" "}
                    {three.cTitle}
                  </p>
                  <p className=" mb-1">
                    <strong className=" text-uppercase">Section:</strong>{" "}
                    {three.section}
                  </p>
                  <p className=" mb-1">
                    <strong className=" text-uppercase">Type:</strong>{" "}
                    {three.type}
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
