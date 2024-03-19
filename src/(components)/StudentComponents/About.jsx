import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="maincard pb-4 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="container">
        <div className="row text-center justify-content-center align-items-center">
          <h2 className=" text-uppercase">About what siwes and the site is</h2>
          <div className=" my-4">
            <div className="card text-move border-0">
              <div className="card-body">
                <p className=" fw-semibold text-wrap">
                  Students Industrial Work Experience Scheme (SIWES) 
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 mainabout">
            <img
              src="/siwes/suzi.jpg"
              className=" rounded-bottom-5 rounded-top-2"
              alt=""
            />
          </div>

          <div className="col-lg-6 col-12 mainabout text-start">
            <h1> Background:</h1>
            <h5>
              The Students Industrial Work Experience Scheme (SIWES) is a Skills
              Training Programme designed to prepare and expose Students of
              Universities, Polytechnics, Colleges of Technology, Colleges of
              Agriculture and Colleges of Education for the Industrial Work
              situation they are likely to meet after graduation.
            </h5>
            <Link href={"/students/about"} className=" btn border-0">
              {" "}
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
