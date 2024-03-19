import React from 'react'

export default function SeniorVisiting() {
  return (
    <section class="allStaffsCards min-vh-100 pb-4 section-bg">
      <div class="" data-aos="fade-up">
        <div class="section-title ">
          <h2 className=" text-center fw-bold  text-uppercase">
          Senior Visiting Staffs
          </h2>
          <p className=" text-center ">keep scrolling</p>
        </div>

        <div class="row">
          <div class="col-lg-6 " data-aos="zoom-in" data-aos-delay="100">
            <div class="organization d-flex align-items-start ">
              <div class="pic">
                <img src="/siwes/card.jpg" class="img-fluid" alt="" />
              </div>
              <div class="organization-info">
                <h4>Bala Jimmy Yakubu</h4>
                <span>KASU/19/CSC/1015</span>
                <p>CGPA 4.12</p>
                <div class="links">
                  <a href="">
                    <i class="bi bi-eye"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-trash"></i>
                  </a>
                  <a href="/results/generate/generateForm">
                    <i class="bi bi-pencil"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
