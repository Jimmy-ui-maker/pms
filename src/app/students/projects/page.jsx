import Link from "next/link";

export default function page() {
  return (
    <section className="projects min-vh-100 pb-4 d-flex flex-column justify-content-center align-items-center">
      <div className="container">
        <div
          className=" title text-center"
          data-aos="fade-in"
          data-aos-delay="100"
        >
          <h2 className=" text-uppercase">Some SIWES Mini projects.</h2>

          <p>click to see.</p>
        </div>
        <div className="row g-4 text-center  align-items-center">
          <div className="col-12 col-lg-3 ">
            <div className="card ">
              <img src="/siwes/suzi.jpg" className="rounded-2 " />
              <hr />
              <div className=" text-start p-2">
                <h2>Calculator </h2>
                <p> Using Java</p>
                <div className=" text-end p-3">
                  <Link className=" text-decoration-none" href={"/"}>
                    Click me
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 ">
            <div className="card ">
              <img src="/siwes/adm.jpg" className="rounded-2 " />
              <hr />
              <div className=" text-start p-2">
                <h2>Calculator </h2>
                <p> Using Java</p>
                <div className=" text-end p-3">
                  <Link className=" text-decoration-none" href={"/"}>
                    Click me
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 ">
            <div className="card ">
              <img src="/siwes/card.jpg" className="rounded-2 " />
              <hr />
              <div className=" text-start p-2">
                <h2>Website </h2>
                <p> Using HTML CSS & Javascript</p>
                <div className=" text-end p-3">
                  <Link className=" text-decoration-none" href={"/"}>
                    Click me
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 ">
            <div className="card ">
              <img src="/siwes/logo.png" className="rounded-2 " />
              <hr />
              <div className=" text-start p-2">
                <h2>Website </h2>
                <p> Using HTML CSS & Javascript</p>
                <div className=" text-end p-3">
                  <Link className=" text-decoration-none" href={"/"}>
                    Click me
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
