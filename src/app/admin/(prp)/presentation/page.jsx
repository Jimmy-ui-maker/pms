import React from "react";

export default function page() {
  return (
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Placement Presentation</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/admin">Admin Home</a>
            </li>
            <li class="breadcrumb-item ">Upload Placement Mini Presentation</li>
          </ol>
        </nav>
      </div>
      {/**<!-- End Page Title --> */}
      <div className=" adminForm ">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="card ">
              <div className="card-body">
                <h1 className="text-center text-uppercase mb-4">Placement Mini Presentation</h1>
                <hr />
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <h2>Names Section</h2>
                      <hr />
                      <div className="mb-3">
                        <label className="">Founder Name</label>
                        <input
                          type="text"
                          className="form-control shadow-none "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="">Organization Name</label>
                        <input
                          type="text"
                          className="form-control shadow-none "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="">Faculty of Science</label>
                        <input className="form-control shadow-none " />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <h2>Names Section</h2>
                      <hr />
                      <div className="mb-3">
                        <label className="">Founder Name</label>
                        <input
                          type="text"
                          className="form-control shadow-none "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="">Organization Name</label>
                        <input
                          type="text"
                          className="form-control shadow-none "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="">Faculty of Science</label>
                        <input className="form-control shadow-none " />
                      </div>
                    </div>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
