import Link from "next/link";

export default function WelcomePage() {
  return (
    <section className="welcomePage w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="container text-center">
        <div class="btns" data-aos="fade-up" data-aos-delay="300">
          <div className="row mx-2">
            <div className="card g-4 border-0">
              <div className="card-body ">
                <h3 className=" my-2">Placement Management System</h3>
                <h5 className=" my-2 ">Computer Science Department,KASU.</h5>
              </div>
            </div>
          </div>
          <div className="row">
           
            <div className=" a-route col-lg-12 col-12 mt-4">
              <Link href="#placement" className="btn">
                List
              </Link>
              <Link href="#logbooks" className="btn ">
                Log
              </Link>
              <Link href="#about" className="btn btn-get-started  ">
                <i className="bi bi-chevron-double-down"></i>
              </Link>
              <Link href="#projects" className="btn">
                Project
              </Link>
              <Link href="#report" className="btn">
                Report
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
