import React from "react";

export default function page() {
  return (
    <section id="product" className="siwesForm">
      <div className="container py-4">
        <div class="section-title">
          <h2 className="text-center ">Bellow are Some Placement Forms</h2>
        </div>
        <hr />

        <div className="row g-4 align-items-center text-lg-start ">
          <div className="col-12 col-lg-3 ">
            <div className="card card2 ">
              <img src="/siwes/suzi.jpg" className="card-img-top rounded-2 " />
              <hr />
              <div className="bText p-3">
                <p className="">
                  <strong className=" text-uppercase">Type:</strong> Form 8{" "}
                </p>
                <p className=" mb-2">
                  <strong className=" text-uppercase">Type:</strong> Form 8{" "}
                </p>
                <div className=" text-end">
                  <small>To save the image, right click on it.</small>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
