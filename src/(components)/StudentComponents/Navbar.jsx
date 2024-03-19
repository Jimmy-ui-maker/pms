export default function Navbar() {
  return (
    <>
      <nav className="navbar studentNavbar navbar-expand-md shadow-sm">
        <div className="container">
          <img
            src="/siwes/logo.png"
            className=" rounded-2"
            width={50}
            height={40}
            alt=""
          />
          <div className=" d-none d-lg-block">
            <a href="/students" className="navbar-brand text-uppercase ">
              Placement Management System
            </a>
          </div>

          <div className=" d-lg-none">
            <a href="/students" className="navbar-brand  ">
              Placement System
            </a>
          </div>
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbars"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list"></i>
          </button>

          {/**Side bar */}
          <div
            class="sidebar offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbars"
            aria-labelledby="offcanvasNavbarLabel"
          >
            {/**Side bar header */}
            <div class="offcanvas-header text-white border-bottom">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Placement System
              </h5>
              <button
                type="button"
                class="btn-close btn-close-white shadow-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            {/**Side bar body */}
            <div class=" sidebar offcanvas-body py-1">
              <ul class="navbar-nav justify-content-end align-items-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <a href="/students/about" className="nav-link fw-bold">
                    About Section
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/students/scienceFaculties"
                    className="nav-link fw-bold"
                  >
                    Placement
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/students/logbooks" className="nav-link fw-bold">
                    Log Books
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/students/projects" className="nav-link fw-bold">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/students/report" className="nav-link fw-bold">
                    Report
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/students/faqs" className="nav-link fw-bold">
                    Fags
                  </a>
                </li>
              </ul>
              <div className="d-lg-none">
                <div className=" text-white border-bottom"></div>
                <div className=" row g-4 mt-2 justify-content-center align-items-center">
                  <div className=" col-6">
                    <div className="card bg-transparent border-0 shadow">
                      <h1>Col 1</h1>
                    </div>
                  </div>
                  <div className=" col-6">
                    <div className="card bg-transparent border-0 shadow">
                      <h1>Col 2</h1>
                    </div>
                  </div>
                  <div className=" col-6">
                    <div className="card bg-transparent border-0 shadow">
                      <h1>Col 3</h1>
                    </div>
                  </div>
                  <div className=" col-6">
                    <div className="card bg-transparent border-0 shadow">
                      <h1>Col 4</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
