import Link from "next/link";
import React from "react";

export default function LogBookFill() {
  return (
    <section
      id="logbooks"
      className="maincard d-flex pb-4 flex-column justify-content-center align-items-center shadow-lg"
    >
      <div className="container">
        <div className="row text-center align-items-center">
          <h2 className=" text-uppercase">Log Books</h2>
          <p>fiew about Log Books</p>
          <div className="col-lg-6">
            <div className="card border-0">
              <div className="card-body">
                <h3 className=" text-uppercase">Siwes Forms</h3>
                <hr />
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-6 text-start">
                    <h4>
                      Click on read more to see all the forms of siwes an to go
                      about them, i.e filling and where ti submit them.
                    </h4>
                    <Link href={"/students/logbooks/forms"} className="btn border-0 mb-2">
                      Read More
                    </Link>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="/siwes/suzi.jpg"
                      alt="siwes img"
                      className=" rounded-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card border-0">
              <div className="card-body">
                <h3 className=" text-uppercase">About Log Book</h3>
                <hr />
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-6 text-start">
                    <h4>Log Book simply means,</h4>
                    <Link href={"/students/logbooks/aboutLog"} className="btn border-0 mb-2">
                      Read More
                    </Link>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="/siwes/suzi.jpg"
                      alt="siwes img"
                      className=" rounded-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="card border-0">
              <div className="card-body">
                <Link
                  href={"/students/logbooks"}
                  className="btn p-4 fw-bold border-0 rounded-4 mb-2"
                >
                  Click Me to see more about Log Books.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
