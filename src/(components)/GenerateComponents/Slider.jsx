import React from "react";

export default function Slider() {
  return (
    <section>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/siwes/sch1.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption">
              <h5>100 Level</h5>
              <p>Generate result for current 100 Level Student</p>

              <a href="/results/generate/generateForm" class="btn clickMeBtn mt-3">
                Click me
              </a>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/siwes/record.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption">
            <h5>200 Level</h5>
              <p>Generate result for current 200 Level Student</p>

              <a href="/results/generate/generateForm" class="btn clickMeBtn mt-3">
                Click me
              </a>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/siwes/schb.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-md-block">
            <h5>300 Level</h5>
              <p>Generate result for current 300 Level Student</p>

              <a href="/results/generate/generateForm" class="btn clickMeBtn mt-3">
                Click me
              </a>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
