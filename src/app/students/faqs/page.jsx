
import FAQS from "@/(components)/StudentComponents/FAQS";
import React from "react";

export default function page() {
  return (
    <>
      <section id="accPage" class="accPage d-flex align-items-center">
        <div class="container">
          <div class="row uper">
            <div class="col-lg-6 d-flex flex-column justify-content-center text-start  order-2 order-lg-1 ">
              <h1 data-aos="fade-up">Frequenly Ask Questions</h1>
              <h2 data-aos="fade-up" data-aos-delay="400">
                This section will answer some of your questions
              </h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div class="text-center text-lg-start">
                  <a
                    href="#faqs"
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
              <h4 className=" d-lg-none img-head">F A Q s</h4>
              <img src="/siwes/suzi.jpg" class="img-fluid shadow" alt="" />
            </div>
          </div>
        </div>
      </section>

      <div id="faqs">
        <FAQS />
      </div>
    </>
  );
}
