import React from "react";

export default function PassQLandingPage() {
  return (
    <section class="zallaLandingPage min-vh-100 w-100 d-flex align-items-center">
      <div class="container">
        <div class="row uper">
          <div class="col-lg-6 d-flex flex-column justify-content-center text-start  order-2 order-lg-1 ">
            <h1 data-aos="fade-up">Latest Passed Questions</h1>
            <h2 data-aos="fade-up" data-aos-delay="400">
              This section will help you with some passed questions on tests and
              examminations based on sections and levels.
            </h2>
            <div data-aos="fade-up" data-aos-delay="600">
              <div class="text-center text-lg-start">
                <a
                  href="/zallaPassQ#about"
                  class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>Get Started</span>
                  <i class="bi bi-arrow-down"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            class="col-lg-6 hero-img order-lg-1 order-1 "
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <h4 className=" d-lg-none img-head">Zalla PassQ</h4>
            <img src="/siwes/sch1.jpg" class="img-fluid shadow" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
