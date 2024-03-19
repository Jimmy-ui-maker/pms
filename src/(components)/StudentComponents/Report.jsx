import Link from "next/link";
import React from "react";

export default function Report() {
  return (
    <section id="report" class="siwesList min-vh-100 section-bg pb-4">
      <div class="container" data-aos="fade-up">
        <div class="section-title ">
          <h2 className=" text-center fw-bold  text-uppercase">
            Technical Report and Presentations.
          </h2>
          <p className=" text-center ">
            and some format on how to achieve them.
          </p>
        </div>

        <div class="row">
          <div class="col-lg-6 " data-aos="zoom-in" data-aos-delay="100">
            <div class="organization d-flex align-items-start ">
              <div class="pic">
                <img src="/siwes/card.jpg" class="img-fluid" alt="" />
              </div>
              <div class="organization-info">
                <h4>Technical Report</h4>
                <span>Computer Science Department</span>
                <p>KASU, Kaduna State.</p>
                <div class="links">
                  <a href="">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    {" "}
                    <i class="bi bi-linkedin"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="col-lg-6 mt-4 mt-lg-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div class="organization d-flex align-items-start">
              <div class="pic">
                <img src="/siwes/card.jpg" class="img-fluid" alt="" />
              </div>
              <div class="organization-info">
                <h4>Report Format</h4>
                <span>Computer Science Department</span>
                <p>KASU, Kaduna State.</p>
                <div class="links">
                  <a href="">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="organization d-flex align-items-start">
              <div class="pic">
                <img src="/siwes/logo.png" class="img-fluid" alt="" />
              </div>
              <div class="organization-info">
                <h4>Slide Presentation</h4>
                <span>Computer Science Department</span>
                <p>KASU, Kaduna State.</p>
                <div class="links">
                  <Link href="">
                    <i class="bi bi-twitter"></i>
                  </Link>
                  <Link href="">
                    <i class="bi bi-facebook"></i>
                  </Link>
                  <Link href="">
                    <i class="bi bi-instagram"></i>
                  </Link>
                  <Link href="">
                    
                    <i class="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
            <div class="organization d-flex align-items-start">
              <div class="pic">
                <img src="/siwes/logo.png" class="img-fluid" alt="" />
              </div>
              <div class="organization-info">
                <h4>Presentation Format</h4>
                <span>Computer Science Department</span>
                <p>KASU, Kaduna State.</p>
                <div class="links">
                  <Link href="">
                    <i class="bi bi-twitter"></i>
                  </Link>
                  <Link href="">
                    <i class="bi bi-facebook"></i>
                  </Link>
                  <Link href="">
                    <i class="bi bi-instagram"></i>
                  </Link>
                  <Link href="">
                    {" "}
                    <i class="bi bi-linkedin"></i>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
