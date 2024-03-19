import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <section
      id="logbooks"
      className="maincard pb-4 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="container">
        <div className="row text-center justify-content-center align-items-center">
          <h2 className=" text-uppercase">Log Books</h2>
          <p>fiew about Log Books</p>
          <div className="col-lg-6">
            <div className="card border-0">
              <div className="card-body">
                <h3 className=" text-uppercase">Placement Forms</h3>
                <hr />
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-6 text-start">
                    <h4>
                      Click on read more to see all the placement forms and how to go
                      about them, i.e filling and where to submit them.
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
          <div className="col-lg-6">
            <div className="card border-0">
              <div className="card-body">
                <h3 className=" text-uppercase">Filling</h3>
                <hr />
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-6 text-start">
                    <h4>
                      Here are some samples on how to fill your Log Book,
                      together with some screenshot. They might be of help.
                    </h4>
                    <Link href={"/students/logbooks/filling"} className="btn border-0 mb-2">
                      Click Me
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
                <h3 className=" text-uppercase">Gallary</h3>
                <hr />
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-6 text-start">
                    <h4>
                      Here are some Images, pictures and Screenshorts of forms,
                      filled Log Books, and many more.
                    </h4>
                    <Link href={"/students/logbooks/gallary"} className="btn border-0 mb-2">
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
        </div>
      </div>
    </section>
  );
}
