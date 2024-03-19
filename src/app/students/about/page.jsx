import Link from "next/link";

export default function page() {
  return (
    <section
      id="about"
      className="maincard pb-4 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="container">
        <div className="row text-center justify-content-center align-items-center">
          <h2 className=" text-uppercase">About what siwes and the site is</h2>
          <div className="col-lg-6">
            <div className="card border-0">
              <div className="card-body">
                <h3 className=" text-uppercase">About Siwes</h3>
                <hr />
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-6">
                    <img
                      src="/siwes/suzi.jpg"
                      alt="siwes img"
                      className=" rounded-4"
                    />
                  </div>
                  <div className="col-md-6 text-start">
                    <h4>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Optio, sunt quaerat! Laudantium!
                    </h4>
                    <Link href={""} className="btn border-0">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card border-0">
              <div className="card-body">
                <h3 className=" text-uppercase">About us</h3>
                <hr />
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-6">
                    <img
                      src="/siwes/suzi.jpg"
                      alt="siwes img"
                      className=" rounded-4"
                    />
                  </div>
                  <div className="col-md-6 text-start">
                    <h4>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Optio, sunt quaerat! Laudantium!
                    </h4>
                    <Link href={""} className="btn border-0">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-4">
            <div className="card text-move border-0">
              <div className="card-body">
                <p className=" fw-semibold">
                  Students Industrial Work Experience Scheme (SIWES)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
